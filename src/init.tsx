import React, { useEffect, useMemo } from 'react';
import { removeImageBackground } from '@ombori/grid-media-processing';
import { useSettings } from '@ombori/ga-settings/dist';
// import { useGridSignals } from '@ombori/grid-signals-react';
import App from './app';

const Init = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [imgBlob, setImgBlob] = React.useState<Blob | null>(null);
  const settings = useSettings<any>();

  const productPicture = useMemo(() => {
    const productSpecification = settings?.app.product;
    const product =
      productSpecification && productSpecification?.products[0]
        ? productSpecification?.products[0]
        : null;

    const getProductPictureURL = () => {
      if (!pictureInfo) {
        return '';
      }
      if (pictureInfo.url) {
        return pictureInfo.url;
      }
      if (pictureInfo.catalogPageLocationProduct) {
        return pictureInfo.catalogPageLocationProduct;
      }

      return '';
    };

    const pictureInfo = (product?.catalogPageLocationProduct ?? []).find((media: any) => {
      return media.catalogType.startsWith('image/');
    });

    return getProductPictureURL();
  }, [settings]);

  useEffect(() => {
    const removeProductImgBg = async () => {
      try {
        await removeImageBackground({ url: productPicture })
        .then((blob) => {
          setImgBlob(blob);
        });
      } catch(e) {
        console.log(e);
      }
      setIsReady(true);
    }

    if (productPicture) {
      removeProductImgBg();
    }
  }, [productPicture]);

  // const isSignalsReady = useGridSignals();

  // if (!isSignalsReady) {
  //   return <div className='init'>Initializing App...</div>
  // }

  return isReady
    ? <App imgBlob={imgBlob}/>
    : <div>Loading...</div>;
};

export default Init;
