import {
  GridProduct,
  CatalogPageLocationProduct
} from '@ombori/grid-products/dist';

type ProductMedia = CatalogPageLocationProduct & {
  ref: 'media',
  id: string,
  name: string,
  type: 'product-media',
  url: string,
}

type GridProductWithMedia = Omit<GridProduct, 'catalogPageLocationProduct'> & {
  catalogPageLocationProduct: ProductMedia[]
}

type ProductInformation = {
  productsGroupsIdsBoot: string[];
  productsIds: string[]
  products: GridProductWithMedia[];
  productsFetchURLBoot: string;
  ref: 'grid-product'
}

  /**
 * @title Example schema
 */
export type Schema = {
  products: ProductInformation[];
  backgroundMedia:  string; // only url for now, will refactor.
  backgroundColor: string;
  callingToActionText: string;
  // productsFromQuery:  ProductInformation;
}