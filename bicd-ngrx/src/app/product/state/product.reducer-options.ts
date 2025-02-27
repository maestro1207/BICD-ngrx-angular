import { Product, ProductResponse, ProductState } from '../product.types';

export const getProducts = (state: ProductState) => {
  return {
    ...state,
    products: [],
    isProductsLoading: true,
  };
};

export const getProductsSuccess = (
  state: ProductState,
  action: { products: ProductResponse }
) => {
  const products: Product[] = <Product[]>(
    JSON.parse(JSON.stringify(action.products.products))
  );
  return {
    ...state,
    products,
    isProductsLoading: false,
  };
};

export const getProductsError = (state: ProductState) => {
  return {
    ...state,
    isProductsLoading: false,
  };
};

export const selectProducts = (state: ProductState, action: { id: number }) => {
  return {
    ...state,
    selectedProductId: action.id,
  };
};

export const updateProduct = (state: ProductState) => {
  return {
    ...state,
    isProductUpdating: true,
  };
};

export const updateProductError = (state: ProductState) => {
  return {
    ...state,
    isProductUpdating: false,
  };
};

export const updateProductSuccess = (state: ProductState) => {
  return {
    ...state,
    isProductUpdating: false,
  };
};
