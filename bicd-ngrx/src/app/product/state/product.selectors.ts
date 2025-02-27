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

export const selectIsSelectedProduct = createSelector(
  selectProductState,
  (state: ProductState) => state.selectedProductId !== undefined
);

export const selectSelectedProduct = createSelector(
  selectProducts,
  selectSelectedProductId,
  (products: Product[], productId: number | undefined) => {
    let product: Product | undefined = undefined;
    if (products.length > 0 && productId !== undefined) {
      product = products.find((prod) => prod.id === productId);
    }
    return product;
  }
);
