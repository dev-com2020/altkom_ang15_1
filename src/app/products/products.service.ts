import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
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
  }
}
