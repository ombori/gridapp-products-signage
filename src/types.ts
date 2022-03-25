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
  productGroupId: string;
  productId: string;
  products: GridProductWithMedia[];
  productSourceURL: string;
  ref: 'grid-product';
};

/**
 * @title Example schema
 */
export type Types = {
  app: {
    products: { product: ProductInformation }[];
    background: Media;
    backgroundColor: string;
    callToAction: string;
  };
};
