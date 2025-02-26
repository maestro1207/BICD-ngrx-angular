import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from './product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private http = inject(HttpClient);

  getProducts(): Observable<ProductResponse> {
    const url = 'https://dummyjson.com/products';
    return this.http.get<ProductResponse>(url);
  }
}
