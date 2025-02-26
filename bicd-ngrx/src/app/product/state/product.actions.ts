import { createAction, props } from '@ngrx/store';
import { Product, ProductResponse } from '../product.types';

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
