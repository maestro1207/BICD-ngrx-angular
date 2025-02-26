import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductComponent } from './product.component';
import { productEffects } from './state/product.effects';
import { productReducer } from './state/product.reducer';

export const routeProduct: Route[] = [
  {
    path: '',
    providers: [
      importProvidersFrom(
        StoreModule.forFeature('Guest', productReducer),
        EffectsModule.forFeature([productEffects])
      ),
    ],
    children: [
      {
        path: '',
        component: ProductComponent,
      },
    ],
  },
];
