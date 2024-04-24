import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  productName = 'New name'
  @Output() added = new EventEmitter<Product>()

  createProduct(price: number){
    // console.log(this.productName, price)
    this.productsService.addProduct(this.productName, price).subscribe(product => {
      this.added.emit(product)
    })
  }

  constructor(private productsService: ProductsService){}

  

}
