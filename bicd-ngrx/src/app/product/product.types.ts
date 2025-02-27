export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category?: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
}

export interface ProductUpdateRsponse {
  id: number;
}

export const ProductInitailState: ProductState = {
  isProductsLoading: false,
  selectedProductId: undefined,
  products: [],
  isProductUpdating: false,
};

export interface ProductState {
  isProductsLoading: boolean;
  selectedProductId: number | undefined;
  products: Product[];
  isProductUpdating: boolean;
}

export const ProductInitialValues: Product = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  brand: '',
};
