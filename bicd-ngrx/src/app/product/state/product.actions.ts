import { createAction, props } from '@ngrx/store';
import {
  Product,
  ProductResponse,
  ProductUpdateRsponse,
} from '../product.types';

export const getProducts = createAction('Guest [GetProducts]');

export const getProductsError = createAction('Guest [GetProductsError]');

export const getProdutcsSucces = createAction(
  'Guest [GetProductsSuccess]',
  props<{ products: ProductResponse }>()
);

export const selectProduct = createAction(
  'Guest [SelectProduct]',
  props<{ id: number }>()
);

export const updateProduct = createAction('Guest [UpdatePorduct]');

export const updateProductError = createAction('Guest [UpdateProductsError]');

export const updateProductSuccess = createAction(
  'Guest [UpdateProductsSuccess]',
  props<{ productResponse: ProductUpdateRsponse }>
);

export const setProductForm = createAction(
  'Guest [SetProductForm]',
  props<{ productForm: Product }>()
);
