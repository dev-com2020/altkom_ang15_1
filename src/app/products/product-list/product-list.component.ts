import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit {
  selectedProduct: Product | undefined
  today = new Date()

  products: Product[] = []

  constructor(private productService: ProductsService){}

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product)
    }
  }
  ngOnInit(): void {
      this.products = this.productService.getProducts()
  }

  onBuy() {
    window.alert(`Dodaleś do listy ${this.selectedProduct?.name}!`)
  }
}


