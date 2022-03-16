import React from 'react';
// import { getInstance as gs } from '@ombori/grid-signals-react';
import styled from 'styled-components';
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
      <Picture src={firstPicture} />
      <Price>{firstPriceStand}</Price>
      <Price>{firstPriceStand}</Price>
      <Price>{firstPricePromo}</Price>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1.5vmin);
`;

const Picture = styled.img<{ src: string }>``;

const Price = styled.span``;

export default App;
