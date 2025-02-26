import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.types';
import { ProductFacadeService } from './product-facade.service';

@Component({
  selector: 'app-product',
  imports: [AsyncPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  facadeProducts = inject(ProductFacadeService);

  constructor() {
    this.link();
    this.facadeProducts.dispatchGetProducts();
  }

  isProductsLoading$: Observable<boolean> | undefined;
  isProductsLoaded$: Observable<boolean> | undefined;
  products$: Observable<Product[]> | undefined;

  private link(): void {
    this.isProductsLoaded$ = this.facadeProducts.isProductsLoaded$;
    this.isProductsLoading$ = this.facadeProducts.isProductsLoading$;
    this.products$ = this.facadeProducts.products$;
  }

  select(product: Product) {
    this.facadeProducts.dispatchSelectProduct(product.id);
  }
}
