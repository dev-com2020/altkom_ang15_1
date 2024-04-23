import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private products = [
    {
      name: 'Yeti',
      price: 1000
    },
    {
      name: 'Logi',
      price: 800
    },
    {
      name: 'Asus',
      price: 4000
    },
    {
      name: 'Anycubic',
      price: 5000
    }
  ]

  getProducts(): Observable<Product[]> {
    return of(this.products)
  }
}
