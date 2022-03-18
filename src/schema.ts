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

type ProductInformation = {
  productsGroupsIdsBoot: string[];
  productsIds: string[];
  products: GridProductWithMedia[];
  productsFetchURLBoot: string;
  ref: 'grid-product';
};

/**
 * @title Example schema
 */
export type Schema = {
  products: { product: ProductInformation }[];
  background: Media;
  backgroundColor: string;
  callingToActionText: string;
};
