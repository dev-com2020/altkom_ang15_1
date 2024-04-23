import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  // encapsulation: ViewEncapsulation.None
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() product: Product | undefined
  @Output() bought = new EventEmitter();
  @Input() id = -1
  product$: Observable<Product> | undefined

  constructor(private productService: ProductsService){
    console.log(`Produkt ${this.product} w konstruktorze`)
  }

  ngOnInit(): void {
      console.log(`Produkt ${this.product} w OnInit`)
  }
  ngOnChanges(): void {
      this.product$ = this.productService.getProduct(this.id)
  }

  buy() {
    this.bought.emit()
  }

  changePrice(product: Product, price: number) {
    this.productService.updateProduct(product.id, price).subscribe(() => {
      alert(`Cena produktu ${product.name} została zmieniona na ${price}`)
    })
  }

}
