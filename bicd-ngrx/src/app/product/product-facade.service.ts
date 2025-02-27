import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './product.types';
import * as ProductActions from './state/product.actions';
import * as ProductSelectors from './state/product.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductFacadeService {
  private store = inject(Store);

  isProductsLoaded$: Observable<boolean> = this.store.select(
    ProductSelectors.selectIsProductsLoaded
  );
  isProductsLoading$: Observable<boolean> = this.store.select(
    ProductSelectors.selectIsProductLoading
  );
  selectedProductId$: Observable<number | undefined> = this.store.select(
    ProductSelectors.selectSelectedProductId
  );
  products$: Observable<Product[]> = this.store.select(
    ProductSelectors.selectProducts
  );
  isSelectedProduct$: Observable<boolean> = this.store.select(
    ProductSelectors.selectIsSelectedProduct
  );
  selectedProduct$: Observable<Product | undefined> = this.store.select(
    ProductSelectors.selectSelectedProduct
  );

  dispatchGetProducts(): void {
    console.log('1');
    this.store.dispatch(ProductActions.getProducts());
  }

  dispatchSelectProduct(id: number): void {
    this.store.dispatch(ProductActions.selectProduct({ id }));
  }

  dispatchUpdateProduct(): void {
    this.store.dispatch(ProductActions.updateProduct());
  }

  dispatchSetProductForm(productForm: Product) {
    this.store.dispatch(ProductActions.setProductForm({ productForm }));
  }
}
