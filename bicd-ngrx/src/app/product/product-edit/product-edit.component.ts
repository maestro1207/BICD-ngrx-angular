import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged, filter, Observable } from 'rxjs';
import { ProductFacadeService } from '../product-facade.service';
import { Product, ProductInitialValues } from '../product.types';

@Component({
  selector: 'app-product-edit',
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent {
  facadeProducts = inject(ProductFacadeService);

  isSelectedPoroduct$: Observable<boolean> =
    this.facadeProducts.isSelectedProduct$;
  selectedProduct$: Observable<Product | undefined> =
    this.facadeProducts.selectedProduct$;

  // id: number;
  // title: string;
  // description: string;
  // price: number;
  // brand: string;

  productFormGroup: FormGroup = new FormGroup({
    id: new FormControl(ProductInitialValues.id),
    title: new FormControl(ProductInitialValues.title),
    brand: new FormControl(ProductInitialValues.brand),
    price: new FormControl(ProductInitialValues.price),
    category: new FormControl(ProductInitialValues.category),
    description: new FormControl(
      ProductInitialValues.description,
      Validators.required
    ),
  });

  constructor() {
    this.setForm();
    this.listenToFormChanges();
  }

  listenToFormChanges() {
    this.productFormGroup.valueChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((val) => this.facadeProducts.dispatchSetProductForm(val));
  }

  private setForm(): void {
    this.selectedProduct$
      .pipe(
        filter((prod): prod is Product => prod !== undefined),
        takeUntilDestroyed()
      )
      .subscribe((prod: Product) => this.productFormGroup.setValue(prod));
  }

  onSubmit() {
    this.facadeProducts.dispatchUpdateProduct();
  }
}
