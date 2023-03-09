import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product';

export const getProduct = createAction('[Product] Get product');
export const getProductSuccess = createAction(
  '[Product] Get product success',
  (products: ReadonlyArray<Product>) => ({ products })
//   props<{ products: ReadonlyArray<Product> }>()
);

export const addProduct = createAction(
  '[Product] Add product',
  (product: Product) => ({ product })
  // props<{ product: Product }>()
);
export const addProductSuccess = createAction(
  '[Product] Add product success',
  // props<{ product: Product }>(),
  (product: Product) => ({ product })
);
 
export const deleteProduct = createAction(
  '[Product] Delete product',
  (productId: number) => ({ productId })
);

export const deleteProductSuccess = createAction(
  '[Product] Delete product success',
  (productId: number) => ({ productId })
);

export const updateProduct = createAction(
  '[Product] Update product',
  (product: Product) => ({ product })
);

export const updateProductSuccess = createAction(
  '[Product] Update product success',
  (product: Product) => ({ product })
);

