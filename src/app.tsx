import React, { useMemo } from 'react';
// import { getInstance as gs } from '@ombori/grid-signals-react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useHeartbeat } from '@ombori/ga-messaging';

import { Types as Settings } from './types';
import { PriceListTypeEnum } from '@ombori/grid-products/dist';
import { useSettings } from '@ombori/ga-settings/dist';
import { ProductDescription } from '@ombori/grid-products/src/types/grid-product';
import ErrorBoundary from './error-boundary';

const tryGetLocalDescription = (descriptions?: ProductDescription[]) => {
  if (!descriptions || descriptions.length === 0) {
    return '';
  }
  const localDescription = descriptions.find((description) => {
    const enDesc = description.isoLanguageId.toLowerCase().startsWith('en');
    // all non default lang are considered as primary
    return !enDesc;
  });
  if (localDescription) {
    return localDescription.productDescription;
  }
  return descriptions[0].productDescription;
};

const animationTransitionDuration = 1;

type AnimationT = typeof fadeIn;

function App() {
  useHeartbeat();
  const settings = useSettings<Settings>();

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
  }, [product]);

  const productDescription = tryGetLocalDescription(product?.productDescription);
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
    if (pricePromo != null) {
      return (
        <PriceContainer>
          <PromoPrice color="red">{pricePromo}:-</PromoPrice>
          <Price>{priceStandard}:-</Price>
        </PriceContainer>
      );
    }
    if (!priceStandard) {
      return null;
    }
    return (
      <PriceContainer>
        <PromoPrice color="red">{priceStandard}:-</PromoPrice>
      </PriceContainer>
    );
  }, [pricePromo, priceStandard]);

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
        animationDuration={8000}
        animationIn={animations.animationIn}
        animationOut={animations.animationOut}
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
        animationIn={animations.animationIn}
        animationOut={animations.animationOut}
      >
        <Picture
          src={productPicture}
          animationDuration={animationDuration}
          animationIn={animations.animationIn}
          animationOut={animations.animationOut}
        />
        {PriceSection}
        <Text animationIn={fromLeftTexts}>
          <div
            dangerouslySetInnerHTML={{
              __html: productDescription.replace(/(<? *script)/gi, 'sscript'),
            }}
          />
        </Text>
        <CallToActionText animationIn={fromLeftTexts}>
          {callingToActionText}
        </CallToActionText>
        <BackgroundMedia src={backgroundMedia?.url} />
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

// MARKUP STYLES

// CTA / text
const Text = styled.section<{ animationIn: AnimationT }>`
  padding: 8vmin;
  animation-name: ${(props) => props.animationIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-delay: 1s;
  animation-timing-function: ease;
  animation-fill-mode: backwards;
  will-change: transform;
`;

const CallToActionText = styled.section<{ animationIn: AnimationT }>`
  margin-bottom: 10vh;
  animation-name: ${(props) => props.animationIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-delay: ${animationTransitionDuration + 1}s;
  animation-timing-function: ease;
  animation-fill-mode: backwards;
  will-change: transform;
`;

// Main picture
const Picture = styled.img<{
  src: string;
  animationDuration: number;
  animationIn: AnimationT;
  animationOut: AnimationT;
}>`
  width: auto;
  position: absolute;
  will-change: transform;
  z-index: 2;
  top: 80px;
  height: 50vh;  
  animation-name: ${(props) => props.animationIn}, ${rotate};
  animation-duration: ${1}s,
    ${(props) => props.animationDuration - animationTransitionDuration}s;
  animation-iteration-count: 1, 1;
  animation-fill-mode: none, none;
  animation-delay: 0s, ${animationTransitionDuration}s;
`;

// Price
const PriceContainer = styled.section`
  z-index: 8;
  display: block;
  padding: 40px;
  background: #fff;
  margin: 0 auto;
  text-align: left;
  font-weight: bold;
  transform: translate(300%, 0);
  animation-name: ${fromLeftTexts};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-delay: ${animationTransitionDuration + 1}s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
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
  height: 50vh;
  border-radius: 0 0 50% 50%;
  background: #555;
  object-fit: cover;
  animation-name: ${fromTop};
  animation-duration: ${animationTransitionDuration}s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;

const Container = styled.div<{
  color?: string;
  animationDuration: number;
  animationIn: AnimationT;
  animationOut: AnimationT;
}>`
  text-align: center;
  will-change: transform;
  background-color: ${(props) => (props.color ? props.color : '#eee')};
  width: 100vw;
  height: 100vh;
  display: flex;
  font-size: calc(16px + 4vmin);
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  animation-name: ${(props) => props.animationIn}, ${(props) => props.animationOut};
  animation-duration: ${2}s, ${animationTransitionDuration}s;
  animation-iteration-count: 1, 1;
  animation-fill-mode: forwards, forwards;
  animation-delay: 0s,
    ${(props) => props.animationDuration - animationTransitionDuration}s;
`;

export default App;
