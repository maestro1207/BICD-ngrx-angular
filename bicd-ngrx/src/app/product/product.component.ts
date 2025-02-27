import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.types';
import { ProductFacadeService } from './product-facade.service';

@Component({
  selector: 'app-product',
  imports: [AsyncPipe],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  facadeProducts = inject(ProductFacadeService);

  ngOnInit(): void {
    this.facadeProducts.dispatchGetProducts();
  }

  isProductsLoading$: Observable<boolean> | undefined =
    this.facadeProducts.isProductsLoading$;
  isProductsLoaded$: Observable<boolean> | undefined =
    this.facadeProducts.isProductsLoaded$;
  products$: Observable<Product[]> | undefined = this.facadeProducts.products$;
  selectedProductId$: Observable<number | undefined> =
    this.facadeProducts.selectedProductId$;

  select(product: Product) {
    this.facadeProducts.dispatchSelectProduct(product.id);
  }
}
