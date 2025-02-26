import { createReducer, on } from '@ngrx/store';
import { ProductInitailState } from '../product.types';
import * as ProductActions from './product.actions';
import {
  getProducts,
  getProductsError,
  getProductsSuccess,
  selectProducts,
} from './product.reducer-options';

export const productReducer = createReducer(
  ProductInitailState,
  on(ProductActions.getProducts, getProducts),
  on(ProductActions.getProdutcsSucces, getProductsSuccess),
  on(ProductActions.getProductsError, getProductsError),
  on(ProductActions.selectProduct, selectProducts)
);
