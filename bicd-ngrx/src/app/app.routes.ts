import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.routes').then((m) => m.routeProduct),
  },
];
