import React, { useMemo } from 'react';
// import { getInstance as gs } from '@ombori/grid-signals-react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useHeartbeat } from '@ombori/ga-messaging';

import { Types as Settings } from './types';
import { PriceListTypeEnum } from '@ombori/grid-products/dist';
import { useSettings } from '@ombori/ga-settings/dist';
import { ProductDescription, ProductName } from '@ombori/grid-products/src/types/grid-product';
import ErrorBoundary from './error-boundary';

const tryGetLocalDescription = (descriptions?: ProductName[]) => {
  if (!descriptions || descriptions.length === 0) {
    return '';
  }
  const localDescription = descriptions.find((description) => {
    const enDesc = description.isoLanguageId.toLowerCase().startsWith('en');
    // all non default lang are considered as primary
    return !enDesc;
  });
  if (localDescription) {
    return localDescription.productName;
  }
  return descriptions[0].productName;
};

const animationTransitionDuration = 1;

type AnimationT = typeof fadeIn;

function App({ imgBlob }: { imgBlob: Blob | null }) {
  useHeartbeat();
  const settings = useSettings<Settings>();

  const priceContainerBackgroundColor = settings?.app.priceContainerBackgroundColor || '';
  const priceContainerTextColor = settings?.app.priceContainerTextColor || '';

  const callingToActionText = settings?.app.callToAction;
  const backgroundMedia = settings?.app.background;
  const backgroundColor = settings?.app.backgroundColor;
  const productSpecification = settings?.app.product;
  const animationDurationRaw = settings?.app.animationDuration;
  const animationType = settings?.app.animationType;
  const animationDuration =
    animationDurationRaw != null && animationDurationRaw > 2000
      ? animationDurationRaw / 1000
      : 5;

  const product =
    productSpecification && productSpecification?.products[0]
      ? productSpecification?.products[0]
      : null;

  const productPicture = useMemo(() => {
    const getProductPictureURL = () => {
      if (imgBlob) {
        return URL.createObjectURL(imgBlob);
      }
      if (!pictureInfo) {
        return 'no-picture';
      }
      if (pictureInfo.url) {
        return pictureInfo.url;
      }
      if (pictureInfo.catalogPageLocationProduct) {
        return pictureInfo.catalogPageLocationProduct;
      }
  
      return 'no-picture';
    };

    const pictureInfo = (product?.catalogPageLocationProduct ?? []).find((media) => {
      return media.catalogType.startsWith('image/');
    });

    return getProductPictureURL();
  }, [product, imgBlob]);

  const productDescription = tryGetLocalDescription(product?.productName);
  const priceStandard =
    product &&
    product.productPriceList.find(
      (priceInfo) => priceInfo.priceListType === PriceListTypeEnum.Standard,
    )?.listPrice;
  const pricePromo =
    product &&
    product.productPriceList.find(
      (priceInfo) => priceInfo.priceListType === PriceListTypeEnum.Promotional,
    )?.listPrice;

  const PriceSection = useMemo(() => {
    console.log('pricePromo:', pricePromo);
    console.log('priceStandard:', priceStandard);
  
    if (pricePromo != null && pricePromo !== priceStandard) {
      return (
        <PriceContainer
          priceContainerBackgroundColor={priceContainerBackgroundColor}
          priceContainerTextColor={priceContainerTextColor}
        >
          <PromoPrice color="red">{pricePromo}:-</PromoPrice>
          <Price>{priceStandard}:-</Price>
        </PriceContainer>
      );
    }
    if (!priceStandard) {
      return null;
    }
    return (
      <PriceContainer
        priceContainerBackgroundColor={priceContainerBackgroundColor}
        priceContainerTextColor={priceContainerTextColor}
      >
        <PromoPrice color={priceContainerTextColor}>{priceStandard}:-</PromoPrice>
      </PriceContainer>
    );
  }, [priceContainerBackgroundColor, priceContainerTextColor, pricePromo, priceStandard]);

  const animations = useMemo((): {
    animationIn: AnimationT;
    animationOut: AnimationT;
  } => {
    switch (animationType) {
      case 'fade':
        return {
          animationIn: fadeIn,
          animationOut: fadeOut,
        };
      case 'move':
      default:
        return {
          animationIn: fromLeft,
          animationOut: toRight,
        };
      case 'popin':
        return {
          animationIn: popIn,
          animationOut: fadeOut,
        };
    }
  }, [animationType]);

  // you can add more analytics events here. Please ask for documentation of standard supported events types
  // useEffect(() => {
  //   if (productPicture) {
  //     gs().sendContentView({ title: productPicture });
  //   }
  // }, [productPicture]);

  if (!settings) {
    return (
      <Container
        animationDuration={16000}
        // animationIn={animations.animationIn}
        // animationOut={animations.animationOut}
      >
        Loading gridapp settings...
      </Container>
    );
  }

  return (
    <ErrorBoundary>
      <Container
        color={backgroundColor}
        animationDuration={animationDuration}
        // animationIn={animations.animationIn}
        // animationOut={animations.animationOut}
      >
        <Picture
          src={productPicture}
          animationDuration={animationDuration}
          animationIn={animations.animationIn}
          animationOut={animations.animationOut}
        />
        {PriceSection}
        <Text animationIn={fromLeftTexts}>
          <CallToActionText animationIn={fromLeftTexts}>
            {callingToActionText}
          </CallToActionText>
          <div
            dangerouslySetInnerHTML={{
              __html: productDescription.replace(/(<? *script)/gi, 'sscript'),
            }}
          />
        </Text>

        {/* <BackgroundMedia src={backgroundMedia?.url} /> */}
      </Container>
    </ErrorBoundary>
  );
}

// Animations
// From Top
const fromTop = keyframes`
  from {
    transform: translate(0, -100%);
  }
  to {
    transform: translate(0, 0);
  }
`;

// From Left
const fromLeft = keyframes`
  from {
    transform: translate(200%, 0);
  }
  to {
    transform: translate(0, 0);
  }
`;

const fromRight = keyframes`
  from {
    transform: translate(-200%, 0);
  }
  to {
    transform: translate(0, 0);
  }
`;

// From Left for texts
const fromLeftTexts = keyframes`
  from {
    transform: translate(300%, 0);
  }
  to {
    transform: translate(0, 0);
  }
`;

const toRight = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-200%, 0);
  }
`;

// Fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Pop in
const popIn = keyframes`
  from {
    transform: translate(200%, 0) scale(0);
  }
  to {
    transform: translate(0, 0) scale(1);
  }
`;

// Rotate
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(4deg);
  }
  80% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

// Swing
const swing = keyframes`
    0%, 100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }

    15% {
        -webkit-transform: translateX(-32px) rotate(-10deg);
        transform: translateX(-32px) rotate(-10deg);
    }

    30% {
        -webkit-transform: translateX(calc(32px / 2)) rotate(10deg);
        transform: translateX(calc(32px / 2)) rotate(10deg);
    }

    45% {
        -webkit-transform: translateX(calc(-32px / 2)) rotate(calc(-10deg / 1.8));
        transform: translateX(calc(-32px / 2)) rotate(calc(-10deg / 1.8));
    }

    60% {
        -webkit-transform: translateX(calc(32px / 3.3)) rotate(calc(10deg / 3));
        transform: translateX(calc(32px / 3.3)) rotate(calc(10deg / 3));
    }

    75% {
        -webkit-transform: translateX(calc(-32px / 5.5)) rotate(calc(-10deg / 5));
        transform: translateX(calc(-32px / 5.5)) rotate(calc(-10deg / 5));
    }
`;

// ZOOM
const zoom = keyframes`
  from {
    transform: scale(1) rotate(0);
  }
  to {
    transform: scale(1.2) rotate(1.5deg);
  }
`;

// MARKUP STYLES

// CTA / text
const Text = styled.section<{ animationIn: AnimationT }>`
  position: absolute;
  bottom: 80px;
  left: 0;
  max-width: 50vw;
  background: #fff;
  z-index: 12;
  padding: 5vmin 10vmin;
  animation-name: ${fromRight};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-delay: 1s;
  animation-timing-function: ease;
  animation-fill-mode: backwards;
  will-change: transform;
  border-radius: 0 80px 0 0;

  h1,
  h2,
  h3,
  p,
  ul,
  ol {
    margin: 0;
    padding: 8px 0;
  }
  ul,
  ol {
    padding-left: 1.6rem;
  }
`;

const CallToActionText = styled.section<{ animationIn: AnimationT }>`
  font-size: 150%;
  font-weight: bold;
  color: rgba(0, 102, 181, 1);
  padding-bottom: 32px;
`;

// Main picture
const Picture = styled.img<{
  src: string;
  animationDuration: number;
  animationIn: AnimationT;
  animationOut: AnimationT;
}>`
  width: 100vw;
  position: absolute;
  will-change: transform;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation-name: ${(props) => props.animationIn}, ${zoom},
    ${(props) => props.animationOut};
  animation-duration: ${1}s,
    ${(props) => props.animationDuration - animationTransitionDuration}s,
    ${animationTransitionDuration}s;
  animation-iteration-count: 1, 1, 1;
  animation-fill-mode: none, none, forwards;
  animation-delay: 0s, 1s,
    ${(props) => props.animationDuration - animationTransitionDuration}s;
`;

// Price
const PriceContainer = styled.section<{
  priceContainerBackgroundColor?: string;
  priceContainerTextColor: string;
  animationDuration?: number;
  animationIn?: AnimationT;
  animationOut?: AnimationT;
}>`
  position: absolute;
  z-index: 8;
  display: block;
  padding: 40px;
  background: ${(props) =>
    props.priceContainerBackgroundColor
      ? props.priceContainerBackgroundColor
      : 'rgba(0, 102, 181, 1)'};
  margin: 0 auto;
  text-align: left;
  font-weight: bold;
  top: 80px;
  right: 80px;
  transform-origin: center right;
  transform: translate(200%, 0);
  animation-name: ${fromLeft}, ${swing};
  animation-duration: 0.25s, 1s;
  animation-delay: 1s, 1.25s;
  animation-timing-function: ease, ease;
  animation-fill-mode: forwards, forwards;
  border-radius: 0 0 0 60px;
  color: ${({ priceContainerTextColor }) => priceContainerTextColor ? priceContainerTextColor : ''};
`;

const Price = styled.span`
  display: block;
  text-decoration: line-through;
  font-size: calc(16px + 6vmin);
`;

const PromoPrice = styled(Price)`
  font-size: calc(16px + 16vmin);
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : '#000')};
`;

// Backgrounds
const BackgroundMedia = styled.img`
  will-change: transform;
  z-index: 0;
  width: 100%;
  position: absolute;
  top: 0;
  left: -25%;
  width: 150%;
  height: 12vh;
  border-radius: 0 0 50% 50%;
  background: #eee;
  /* background: url('https://www.kjell.com/globalassets/productimages/826245_24111_06.tif?ref=CB4EBC88BC&format=jpg&w=960&h=960&mode=pad')
    50% 50% no-repeat;
  background-size: cover; */
  object-fit: cover;
  animation-name: ${fromTop};
  animation-duration: ${animationTransitionDuration}s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;

const Container = styled.div<{
  color?: string;
  animationDuration: number;
  // animationIn: AnimationT;
  // animationOut: AnimationT;
}>`
  will-change: transform;
  background-color: ${(props) => (props.color ? props.color : '#eee')};
  width: 100vw;
  height: 100vh;
  display: flex;
  font-size: calc(16px + 2vmin);
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  animation-duration: ${2}s, ${animationTransitionDuration}s;
  animation-iteration-count: 1, 1;
  animation-fill-mode: forwards, forwards;
  animation-delay: 0s,
    ${(props) => props.animationDuration - animationTransitionDuration}s; */
`;

export default App;
