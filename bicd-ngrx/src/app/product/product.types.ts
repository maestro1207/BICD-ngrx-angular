export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
}

export const ProductInitailState: ProductState = {
  isProductsLoading: false,
  selectedProductId: undefined,
  products: [],
};

export interface ProductState {
  isProductsLoading: boolean;
  selectedProductId: number | undefined;
  products: Product[];
}
