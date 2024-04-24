import { Component, Host, OnInit, Optional } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  // selector: 'app-favorites', celowo zabieram selektor (bo chcę żeby to bylo przez router obslugiwane)
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  products: Product[] = []

  //constructor(@Host() @Optional() private productService: ProductsService) {}
  constructor(private productService: ProductsService) {}

  private getProducts(){
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }

  ngOnInit(): void {
    this.getProducts()
  }

}
