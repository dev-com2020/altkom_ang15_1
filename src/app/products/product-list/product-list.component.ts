import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  selectedProduct: Product | undefined
  today = new Date()

  products: Product[] = [
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
    }]

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product)
    }
  }

  onBuy() {
    window.alert(`Dodaleś do listy ${this.selectedProduct?.name}!`)
  }
}


