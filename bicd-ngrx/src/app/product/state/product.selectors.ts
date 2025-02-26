import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product, ProductState } from '../product.types';

export const selectProductState = createFeatureSelector<ProductState>('Guest');

export const selectIsProductLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.isProductsLoading
);

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectSelectedProductId = createSelector(
  selectProductState,
  (state: ProductState) => (state ? state.selectedProductId : undefined)
);

export const selectIsProductsLoaded = createSelector(
  selectProducts,
  (products: Product[]) => products.length > 0
);

// todo
export const selectIsNoSelectedProduct = createSelector(
  selectSelectedProductId,
  (productId: number | undefined) => productId === undefined
);
