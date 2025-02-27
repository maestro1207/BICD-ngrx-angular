import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductFacadeService } from '../product-facade.service';
import { Product } from '../product.types';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  imports: [AsyncPipe],
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent {
  facadeProducts = inject(ProductFacadeService);

  isSelectedPoroduct$: Observable<boolean> =
    this.facadeProducts.isSelectedProduct$;
  selectedProduct$: Observable<Product | undefined> =
    this.facadeProducts.selectedProduct$;

  constructor() {}
}
