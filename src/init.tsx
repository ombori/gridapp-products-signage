import React, { useEffect } from 'react';
import { removeImageBackground } from '@ombori/grid-media-processing';
// import { useGridSignals } from '@ombori/grid-signals-react';
import App from './app';

const Init = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [imgBlob, setImgBlob] = React.useState<Blob | null>(null);

  useEffect(() => {
    const removeProductImgBg = async () => {
      try {
        await removeImageBackground({ url: 'https://www.kjell.com/globalassets/productimages/849855_65108.tif?ref=7EA30C5BB5&format=jpg&w=700' })
        .then((blob) => {
          setImgBlob(blob);
        });
      } catch(e) {
        console.log(e);
      }
      setIsReady(true);
    }

    removeProductImgBg();
  }, []);

  // const isSignalsReady = useGridSignals();

  // if (!isSignalsReady) {
  //   return <div className='init'>Initializing App...</div>
  // }

  return isReady
    ? <App imgBlob={imgBlob}/>
    : <div>Loading...</div>;
};

export default Init;
