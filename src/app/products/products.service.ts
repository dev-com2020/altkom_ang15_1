import { Injectable } from '@angular/core';
import { Product } from './product';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ProductDTO {
  title: string
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private productsUrl = 'https://fakestoreapi.com/products'

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
    return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
      map(products => products.map(product => {
        return {
          name: product.title,
          price: product.price
        }
      }))
    )
  }
}
