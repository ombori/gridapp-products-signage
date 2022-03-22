import React, { useMemo } from 'react';
// import { getInstance as gs } from '@ombori/grid-signals-react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useHeartbeat } from '@ombori/ga-messaging';

import { Types as Settings } from './types';
import { PriceListTypeEnum } from '@ombori/grid-products/dist';
import { useSettings } from '@ombori/ga-settings/dist';
import { ProductDescription } from '@ombori/grid-products/src/types/grid-product';

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

function App() {
  useHeartbeat();
  const settings = useSettings<Settings>();

  const callingToActionText = settings?.app.callToAction;
  const backgroundMedia = settings?.app.background;
  const backgroundColor = settings?.app.backgroundColor;
  const products = settings?.app.products;

  const firstProductSpecification = products && products[0];

  const firstProduct =
    firstProductSpecification && firstProductSpecification?.product.products[0]
      ? firstProductSpecification?.product.products[0]
      : null;
  const firstPictureInfo = (
    firstProduct ?? { catalogPageLocationProduct: [] }
  ).catalogPageLocationProduct.find((media) => {
    return media.catalogType.startsWith('image/');
  });
  const firstPicture = firstPictureInfo ? firstPictureInfo.url : 'no-image';
  const firstProductDescription = tryGetLocalDescription(
    firstProduct?.productDescription,
  );
  const firstPriceStand =
    firstProduct &&
    firstProduct.productPriceList.find(
      (priceInfo) => priceInfo.priceListType === PriceListTypeEnum.Standard,
    )?.listPrice;
  const firstPricePromo =
    firstProduct &&
    firstProduct.productPriceList.find(
      (priceInfo) => priceInfo.priceListType === PriceListTypeEnum.Promotional,
    )?.listPrice;

  const PriceSection = useMemo(() => {
    if (firstPricePromo != null) {
      return (
        <PriceContainer>
          <PromoPrice color="red">{firstPricePromo}:-</PromoPrice>
          <Price>{firstPriceStand}:-</Price>
        </PriceContainer>
      );
    }
    return (
      <PriceContainer>
        <PromoPrice color="red">{firstPriceStand}:-</PromoPrice>
      </PriceContainer>
    );
  }, [firstPricePromo, firstPriceStand]);

  // you can add more analytics events
  // useEffect(() => {
  //   if (firstProduct) {
  //     gs().sendContentView({ title: firstProduct.productGroupId });
  //   }
  // }, [firstProduct]);

  if (!settings) {
    return <Container>Loading gridapp settings...</Container>;
  }

  return (
    <Container color={backgroundColor}>
      <Picture src={firstPicture} />
      {PriceSection}
      <Text>
        <div
          dangerouslySetInnerHTML={{
            __html: firstProductDescription.replace(/(<? *script)/gi, 'illegalscript'),
          }}
        />
      </Text>
      <CallToActionText>{callingToActionText}</CallToActionText>
      <BackgroundMedia src={backgroundMedia?.url} />
    </Container>
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
    filter: blur(24px);
  }
  to {
    filter: blur(0px);
    transform: translate(0, 0);
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

// Pop in
const popIn = keyframes`
  from {
    transform: scale(0) translate(-100%, 100%) rotate(0deg);
  }
  to {
    transform: scale(1) translate(-50%, 0) rotate(1deg);
  }
`;

// Rotate
const rotate = keyframes`
  from {
    transform: translate(-50%,0) rotate(1deg);
  }
  50% {
    transform: translate(-50%,0) rotate(8deg);
  }
`;

// MARKUP STYLES

// CTA / text
const Text = styled.section`
  padding: 8vmin;
  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-delay: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: backwards;
`;
const CallToActionText = styled.span`
  margin-bottom: 10px;
`;

// Main picture
const Picture = styled.img<{ src: string }>`
  width: auto;
  position: absolute;
  z-index: 2;
  top: 80px;
  left: 0;
  right: 0;
  height: 50vh;
  left: 50%;
  transform: translate(-50%, 0) rotate(1deg);
  filter: drop-shadow(8px 8px 24px rgba(0, 0, 0, 0.24));
  animation-name: ${popIn}, ${rotate};
  animation-duration: 1s, 16s;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: backwards, forwards;
  animation-delay: 0s, 1.5s;
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
  animation-name: ${fromLeft};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-delay: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: backwards;
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
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;

const Container = styled.div<{ color?: string }>`
  text-align: center;
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
`;

export default App;
