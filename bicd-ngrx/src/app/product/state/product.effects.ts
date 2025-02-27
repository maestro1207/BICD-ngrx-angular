import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductDataService } from '../product-data.service';
import * as ProductsActions from './product.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ProductResponse } from '../product.types';
import { Router } from '@angular/router';

@Injectable()
export class productEffects {
  private actions$ = inject(Actions);
  private dataService = inject(ProductDataService);
  private rouet = inject(Router);

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(() =>
        this.dataService.getProducts().pipe(
          map((products: ProductResponse) =>
            ProductsActions.getProdutcsSucces({ products })
          ),
          catchError(() => of(ProductsActions.getProductsError()))
        )
      )
    )
  );

  selectProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductsActions.selectProduct),
        tap(() => this.rouet.navigateByUrl('/product/edit'))
      ),
    { dispatch: false }
  );
}
