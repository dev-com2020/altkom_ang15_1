import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // viewProviders: [ProductsService]
  // providers:[
  //   {provide: ProductsService,useClass: ProductsService}
  // ]
})
export class ProductListComponent implements AfterViewInit, OnInit, OnDestroy {
  selectedProduct: Product | undefined
  today = new Date()

  products: Product[] = []

  products$: Observable<Product[]> | undefined

  private productSub: Subscription | undefined

  constructor(private productService: ProductsService){}

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product)
    }
  }

  private getProducts(){
      this.products$ = this.productService.getProducts()
    }
  

  ngOnInit(): void {
      this.getProducts()
  }

  ngOnDestroy(): void {
      this.productSub?.unsubscribe()
  }

  onBuy() {
    window.alert(`Dodaleś do listy ${this.selectedProduct?.name}!`)
  }
}


