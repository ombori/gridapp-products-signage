import React from 'react';
// import { getInstance as gs } from '@ombori/grid-signals-react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { useHeartbeat } from '@ombori/ga-messaging';

import { Schema as Settings } from './schema';
import {
  IsoLanguageIds,
  PriceListTypeEnum,
  ProductRelationshipTypes,
  ProductStatusEnum,
} from '@ombori/grid-products/dist';

function App() {
  useHeartbeat();
  // const settings = useSettings<Settings>();
  const settings: Settings = {
    products: [
      {
        productsGroupsIdsBoot: ['7351013507309-copy'],
        productsIds: ['41957859361005-copy'],
        productsFetchURLBoot: 'url-to-download-doesnot matter here',
        ref: 'grid-product',
        products: [
          {
            productGroupId: '7351013507309-copy',
            tenantIndex: '6148b74584cfe2000610149c-dev',
            spaceIds: ['61b781d0a0f0030007d9e734', '6204ed49ebc8040007ba034b'],
            introductionDate: '2021-10-28T09:43:42+02:00',
            productType: ['350594597101'],
            productShortDescription: [],
            productInternalName: [],
            storageInstructions: [],
            consumerStorageInstruction: [],
            productShippingInstruction: [],
            productName: [
              {
                isoLanguageId: IsoLanguageIds.en_US,
                productName: 'Key ring (Instore & Online Exclusive)',
              },
            ],
            productDescription: [
              {
                isoLanguageId: IsoLanguageIds.en_US,
                productDescription:
                  '<meta charset="utf-8">\n<div class="short-description" data-mce-fragment="1">\n<div class="short-description-list" data-mce-fragment="1" itemprop="description">\n<ul data-mce-fragment="1">\n<li data-mce-fragment="1">Built-in flashlight</li>\n<li data-mce-fragment="1">Built-in measure tape (100 cm)<br>\n</li>\n<li data-mce-fragment="1">Bottle opener</li>\n</ul>\n</div>\n</div>\n<div class="pim-data-section font-darkest" data-mce-fragment="1">\n<div class="pim-row" data-mce-fragment="1">MATERIAL: Plastic and nickel-free metal<br>\n</div>\n</div>',
              },
            ],
            relatedProductGroups: [
              {
                relatedProductGroupId: '7344196518125',
                productRelationshipType: ProductRelationshipTypes.Recommended,
              },
            ],
            variants: [
              {
                productId: '41957859361005-copy',
                productGroupId: '7351013507309-copy',
                globalTradeItemNumber: [],
                gtinName: [],
                europeanArticleNumber: ['59361005'],
                universalProductCode: [],
                periodStartDate: '2021-10-28T09:43:42+02:00',
                color: '',
                style: '',
                size: '',
                productName: [
                  {
                    isoLanguageId: IsoLanguageIds.en_US,
                    productName: 'Key ring (Instore & Online Exclusive)',
                  },
                ],
              },
            ],
            brand: [],
            productStatus: [
              {
                productStatus: ProductStatusEnum.Active,
                isoLanguageId: IsoLanguageIds.en_US,
                spaceId: '61b781d0a0f0030007d9e734',
              },
            ],
            productFeature: [
              {
                productId: '41957859361005-copy',
                productFeatureType: 'Size',
                isoLanguageId: IsoLanguageIds.en_US,
                productFeatureValue: 'Default Title',
              },
            ],
            productPriceList: [
              {
                productId: '41957859361005-copy',
                priceListType: PriceListTypeEnum.Standard, // THIS ONE IS STANDART
                isoLanguageId: IsoLanguageIds.en_US,
                isoCurrencyCode: 'EUR',
                spaceId: '61b781d0a0f0030007d9e734',
                listPrice: 8,
              },
              {
                productId: '41957859361005-copy',
                priceListType: PriceListTypeEnum.Promotional, // THIS ONE IS PROMO
                isoLanguageId: IsoLanguageIds.en_US,
                isoCurrencyCode: 'EUR',
                spaceId: '6204ed49ebc8040007ba034b',
                listPrice: 6,
              },
            ],
            catalogPageLocationProduct: [
              {
                productId: '41957859361005-copy',
                productGroupId: '7351013507309-copy',
                catalogType: 'image/png',
                url: 'https://cdn.shopify.com/s/files/1/0606/4704/7405/products/DSC_0051.jpg?v=1643725521', // THIS URL SHOULD BE USED FOR PICTURES
                catalogPageLocationProduct:
                  'https://cdn.shopify.com/s/files/1/0606/4704/7405/products/DSC_0051.jpg?v=1643725521',
                ref: 'media',
                id: 'id',
                name: 'name',
                type: 'product-media',
              },
            ],
            productLabel: [
              {
                isoLanguageId: IsoLanguageIds.en_US,
                spaceId: '6204ed49ebc8040007ba034b',
                productLabel: 'In-Store & Online',
              },
              {
                isoLanguageId: IsoLanguageIds.en_US,
                spaceId: '61b781d0a0f0030007d9e734',
                productLabel: 'In-Store & Online',
              },
            ],
            productTags: [],
            productItemQuantity: [
              {
                productId: '41957859361005-copy',
                productItemQuantity: 10,
                spaceId: '61b781d0a0f0030007d9e734',
              },
              {
                productId: '41957859361005-copy',
                productItemQuantity: 16,
                spaceId: '6204ed49ebc8040007ba034b',
              },
            ],
            productVendor: [
              {
                vendorId: 'OMBORISHOP',
                productVendor: 'OMBORISHOP',
              },
            ],
          },
        ],
      },
      {
        productsGroupsIdsBoot: ['7351013507309-copy'],
        productsIds: ['41957859361005-copy'],
        productsFetchURLBoot: 'url-to-download-doesnot matter here',
        ref: 'grid-product',
        products: [
          {
            productGroupId: '7351013507309-copy',
            tenantIndex: '6148b74584cfe2000610149c-dev',
            spaceIds: ['61b781d0a0f0030007d9e734', '6204ed49ebc8040007ba034b'],
            introductionDate: '2021-10-28T09:43:42+02:00',
            productType: ['350594597101'],
            productShortDescription: [],
            productInternalName: [],
            storageInstructions: [],
            consumerStorageInstruction: [],
            productShippingInstruction: [],
            productName: [
              {
                isoLanguageId: IsoLanguageIds.en_US,
                productName: 'Another product name',
              },
            ],
            productDescription: [
              {
                isoLanguageId: IsoLanguageIds.en_US,
                productDescription:
                  '<meta charset="utf-8">\n<div class="short-description" data-mce-fragment="1">\n<div class="short-description-list" data-mce-fragment="1" itemprop="description">\n<ul data-mce-fragment="1">\n<li data-mce-fragment="1">Built-in flashlight</li>\n<li data-mce-fragment="1">Built-in measure tape (100 cm)<br>\n</li>\n<li data-mce-fragment="1">Bottle opener</li>\n</ul>\n</div>\n</div>\n<div class="pim-data-section font-darkest" data-mce-fragment="1">\n<div class="pim-row" data-mce-fragment="1">MATERIAL: Plastic and nickel-free metal<br>\n</div>\n</div>',
              },
            ],
            relatedProductGroups: [
              {
                relatedProductGroupId: '7344196518125',
                productRelationshipType: ProductRelationshipTypes.Recommended,
              },
            ],
            variants: [
              {
                productId: '41957859361005-copy',
                productGroupId: '7351013507309-copy',
                globalTradeItemNumber: [],
                gtinName: [],
                europeanArticleNumber: ['59361005'],
                universalProductCode: [],
                periodStartDate: '2021-10-28T09:43:42+02:00',
                color: '',
                style: '',
                size: '',
                productName: [
                  {
                    isoLanguageId: IsoLanguageIds.en_US,
                    productName: 'Key ring (Instore & Online Exclusive)',
                  },
                ],
              },
            ],
            brand: [],
            productStatus: [
              {
                productStatus: ProductStatusEnum.Active,
                isoLanguageId: IsoLanguageIds.en_US,
                spaceId: '61b781d0a0f0030007d9e734',
              },
            ],
            productFeature: [
              {
                productId: '41957859361005-copy',
                productFeatureType: 'Size',
                isoLanguageId: IsoLanguageIds.en_US,
                productFeatureValue: 'Default Title',
              },
            ],
            productPriceList: [
              {
                productId: '41957859361005-copy',
                priceListType: PriceListTypeEnum.Standard, // THIS ONE IS STANDARD
                isoLanguageId: IsoLanguageIds.en_US,
                isoCurrencyCode: 'EUR',
                spaceId: '61b781d0a0f0030007d9e734',
                listPrice: 20,
              },
              {
                productId: '41957859361005-copy',
                priceListType: PriceListTypeEnum.Promotional, // THIS ONE IS PROMO
                isoLanguageId: IsoLanguageIds.en_US,
                isoCurrencyCode: 'EUR',
                spaceId: '6204ed49ebc8040007ba034b',
                listPrice: 15,
              },
            ],
            catalogPageLocationProduct: [
              {
                productId: '41957859361005-copy',
                productGroupId: '7351013507309-copy',
                catalogType: 'image/png',
                url: 'https://cdn.shopify.com/s/files/1/0606/4704/7405/products/DSC_0051.jpg?v=1643725521', // THIS URL SHOULD BE USED FOR PICTURES
                catalogPageLocationProduct:
                  'https://cdn.shopify.com/s/files/1/0606/4704/7405/products/DSC_0051.jpg?v=1643725521',
                ref: 'media',
                id: 'id',
                name: 'name',
                type: 'product-media',
              },
            ],
            productLabel: [
              {
                isoLanguageId: IsoLanguageIds.en_US,
                spaceId: '6204ed49ebc8040007ba034b',
                productLabel: 'In-Store & Online',
              },
              {
                isoLanguageId: IsoLanguageIds.en_US,
                spaceId: '61b781d0a0f0030007d9e734',
                productLabel: 'In-Store & Online',
              },
            ],
            productTags: [],
            productItemQuantity: [
              {
                productId: '41957859361005-copy',
                productItemQuantity: 10,
                spaceId: '61b781d0a0f0030007d9e734',
              },
              {
                productId: '41957859361005-copy',
                productItemQuantity: 16,
                spaceId: '6204ed49ebc8040007ba034b',
              },
            ],
            productVendor: [
              {
                vendorId: 'OMBORISHOP',
                productVendor: 'OMBORISHOP',
              },
            ],
          },
        ],
      },
    ],
    backgroundMedia: 'url-to-an-image-pls-put',
    backgroundColor: 'pls put color hex here',
    callingToActionText: 'BUY THE THING. NOW!',
  };

  const callingToActionText = settings?.callingToActionText;
  const backgroundMedia = settings?.backgroundMedia;
  const backgroundColor = settings?.backgroundColor;
  const products = settings?.products;
  const firstProductSpecification = products && products[0];
  // products from search
  // const productsFromQuery = settings?.productsFromQuery.products || [];

  const firstProduct =
    firstProductSpecification && firstProductSpecification?.products?.length > 0
      ? firstProductSpecification?.products[0]
      : null;
  const firstPictureInfo = (
    firstProduct ?? { catalogPageLocationProduct: [] }
  ).catalogPageLocationProduct.find((media) => {
    return media.catalogType.startsWith('image/');
  });
  const firstPicture = firstPictureInfo ? firstPictureInfo.url : 'no-image';
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

  // useEffect(() => {
  //   if (firstProduct) {
  //     gs().sendContentView({ title: firstProduct.productGroupId });
  //   }
  // }, [firstProduct]);

  if (!settings) {
    return <Container>Loading gridapp settings...</Container>;
  }

  console.log('something');
  console.log(callingToActionText, backgroundMedia, backgroundColor);
  return (
    <Container>
      <Picture src="https://www.freeiconspng.com/uploads/iphone-x-and-iphone-8-png-12.png" />
      <PriceContainer>
        <PromoPrice color="red">799:-</PromoPrice>
        <Price>999:-</Price>
      </PriceContainer>
      <Text>
        Automatisk luftrenare
        <br /> Renar upp till 119 m3/h. Art. 47007
      </Text>
      {/* <Price>{firstPriceStand}</Price>
      <Price>{firstPricePromo}</Price> */}
      <BackgroundMedia src="https://source.unsplash.com/random" />
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

const Container = styled.div`
  text-align: center;
  background-color: #eee;
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
