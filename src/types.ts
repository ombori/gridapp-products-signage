import { GridProduct, CatalogPageLocationProduct } from '@ombori/grid-products/dist';

type Media = {
  ref: 'media';
  url: string;
  id: string;
  type: string;
  name: string;
};

type ProductMedia = CatalogPageLocationProduct & {
  ref: 'media';
  id: string;
  name: string;
  type: 'product-media';
  url: string;
};

type GridProductWithMedia = Omit<GridProduct, 'catalogPageLocationProduct'> & {
  catalogPageLocationProduct: ProductMedia[];
};

export type ProductInformation = {
  productGroupId: string;
  productId: string;
  products: GridProductWithMedia[];
  productSourceURL: string;
  ref: 'grid-product';
};

export type ProductItem = {
  duration: number;
  product: ProductInformation;
  type: 'PRODUCT';
};

export type MediaItem = {
  duration: number;
  media: Media;
  type: 'MEDIA';
};

/**
 * @title Example schema
 */
export type Types = {
  app: {
    products: (ProductItem | MediaItem)[];
    background: Media;
    backgroundColor: string;
    callToAction: string;
    animationDuration: number;
  };
};

// {
//               "type": "MEDIA",
//               "media": {
//                 "ref": "media",
//                 "url": "https://gridmediadev.blob.core.windows.net/media/5d08a21ae6abf5150035a734/4fb6c5a0-9e72-11ea-91a5-b56aa58a7357",
//                 "id": "5ecb9d87a7aea268ade6e8ad",
//                 "type": "image/jpeg",
//                 "name": "02.jpg"
//               },
//               "duration": 1000
//             },


//{
//               "type": "PRODUCT",
//               "product": {
//                 "productGroupId": "7351013015789",
//                 "productId": "41957852578029",
//                 "productSourceURL": "https://product.api-qa.omborigrid.com/api/tenants/6148b74584cfe2000610149c/dev/products",
//                 "ref": "grid-product",
//                 "env": "prod",
//                 "products": [
//                   {
//                     "productGroupId": "7351013015789",
//                     "tenantIndex": "6148b74584cfe2000610149c-dev",
//                     "spaceIds": ["61b781d0a0f0030007d9e734"],
//                     "introductionDate": "2021-10-28T09:41:21+02:00",
//                     "plannedAbandonmentDate": "2024-10-18",
//                     "shellLifeDays": null,
//                     "productType": ["350594564333", "353997553901"],
//                     "variantsGroupId": null,
//                     "sortName": "Backpack",
//                     "sortPrice": 70,
//                     "sortQuantity": 5,
//                     "productShortDescription": [],
//                     "productInternalName": [
//                       {
//                         "isoLanguageId": "sv-SE",
//                         "productInternalName": "productInternalNameSV"
//                       }
//                     ],
//                     "storageInstructions": [],
//                     "consumerStorageInstruction": [],
//                     "productShippingInstruction": [],
//                     "productName": [
//                       {
//                         "isoLanguageId": "en-US",
//                         "productName": "Backpack"
//                       }
//                     ],
//                     "productDescription": [
//                       {
//                         "isoLanguageId": "en-US",
//                         "productDescription": "<ul>\n<li><span data-mce-fragment=\"1\">High-quality, water-resistant backpack in 65% nylon and 35% polyurethane. </span></li>\n<li><span data-mce-fragment=\"1\">With USB port and reinforced shoulder straps. </span></li>\n<li><span data-mce-fragment=\"1\">The backpack offers plenty of storage space, and it is suitable for laptops up to 15.6 inches.</span></li>\n</ul>"
//                       }
//                     ],
//                     "relatedProductGroups": [
//                       {
//                         "relatedProductGroupId": "7344194257133",
//                         "productRelationshipType": "Recommended"
//                       },
//                       {
//                         "relatedProductGroupId": "7344195338477",
//                         "productRelationshipType": "Recommended"
//                       },
//                       {
//                         "relatedProductGroupId": "7344195600621",
//                         "productRelationshipType": "Recommended"
//                       }
//                     ],
//                     "variants": [
//                       {
//                         "productId": "41957852578029",
//                         "productGroupId": "7351013015789",
//                         "globalTradeItemNumber": [],
//                         "gtinName": [],
//                         "europeanArticleNumber": [
//                           "52578029",
//                           "0000052578029",
//                           "00000052578029"
//                         ],
//                         "universalProductCode": [],
//                         "periodStartDate": "2021-10-28T09:41:22+02:00",
//                         "periodEndDate": null,
//                         "color": "",
//                         "colorImageUrl": null,
//                         "style": "",
//                         "size": "",
//                         "productName": [
//                           {
//                             "isoLanguageId": "en-US",
//                             "productName": "Backpack "
//                           }
//                         ]
//                       }
//                     ],
//                     "brand": [],
//                     "productStatus": [
//                       {
//                         "productStatus": "Active",
//                         "isoLanguageId": "en-US",
//                         "periodStartDate": null,
//                         "periodEndDate": null,
//                         "spaceId": "61b781d0a0f0030007d9e734",
//                         "productStatusNote": null
//                       }
//                     ],
//                     "productFeature": [
//                       {
//                         "productId": "41957852578029",
//                         "productFeatureType": "Size",
//                         "isoLanguageId": "en-US",
//                         "productFeatureValue": "Default Title"
//                       }
//                     ],
//                     "productPriceList": [
//                       {
//                         "productId": "41957852578029",
//                         "priceListType": "Standard",
//                         "isoLanguageId": "en-US",
//                         "isoCurrencyCode": "EUR",
//                         "pricingUomId": null,
//                         "periodStartTimestamp": null,
//                         "periodEndTimestamp": null,
//                         "suggestedRetailPrice": null,
//                         "spaceId": "61b781d0a0f0030007d9e734",
//                         "listPrice": 70
//                       }
//                     ],
//                     "catalogPageLocationProduct": [
//                       {
//                         "productId": "41957852578029",
//                         "productGroupId": "7351013015789",
//                         "catalogType": "image/png",
//                         "catalogPage": null,
//                         "catalogPageLocation": null,
//                         "catalogPageLocationProduct": "https://cdn.shopify.com/s/files/1/0606/4704/7405/products/DSC_0227.jpg?v=1643723264"
//                       },
//                       {
//                         "productId": "41957852578029",
//                         "productGroupId": "7351013015789",
//                         "catalogType": "image/png",
//                         "catalogPage": null,
//                         "catalogPageLocation": null,
//                         "catalogPageLocationProduct": "https://cdn.shopify.com/s/files/1/0606/4704/7405/products/DSC_0077_84f309f0-6199-4f09-b731-2bf7f08156c4.jpg?v=1643723955"
//                       },
//                       {
//                         "productId": "41957852578029",
//                         "productGroupId": "7351013015789",
//                         "catalogType": "image/png",
//                         "catalogPage": null,
//                         "catalogPageLocation": null,
//                         "catalogPageLocationProduct": "https://cdn.shopify.com/s/files/1/0606/4704/7405/products/DSC_0074-2.jpg?v=1643723955"
//                       },
//                       {
//                         "productId": "41957852578029",
//                         "productGroupId": "7351013015789",
//                         "catalogType": "image/png",
//                         "catalogPage": null,
//                         "catalogPageLocation": null,
//                         "catalogPageLocationProduct": "https://cdn.shopify.com/s/files/1/0606/4704/7405/products/DSC_0229.jpg?v=1643723955"
//                       },
//                       {
//                         "productId": "41957852578029",
//                         "productGroupId": "7351013015789",
//                         "catalogType": "image/png",
//                         "catalogPage": null,
//                         "catalogPageLocation": null,
//                         "catalogPageLocationProduct": "https://cdn.shopify.com/s/files/1/0606/4704/7405/products/DSC_0078.jpg?v=1643724049"
//                       }
//                     ],
//                     "productLabel": [],
//                     "productTags": [],
//                     "productItemQuantity": [
//                       {
//                         "productId": "41957852578029",
//                         "productItemQuantityStartDate": null,
//                         "productItemQuantityEndDate": null,
//                         "productItemQuantity": 5,
//                         "spaceId": "61b781d0a0f0030007d9e734"
//                       }
//                     ],
//                     "productVendor": [
//                       {
//                         "vendorId": "OMBORI",
//                         "productVendor": "OMBORI",
//                         "periodStartDate": null,
//                         "periodEndDate": null
//                       }
//                     ]
//                   }
//                 ]
//               },
//               "duration": 4000
//             }