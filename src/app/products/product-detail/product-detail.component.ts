import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product';

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

  constructor(){
    console.log(`Produkt ${this.product} w konstruktorze`)
  }

  ngOnInit(): void {
      console.log(`Produkt ${this.product} w OnInit`)
  }
  ngOnChanges(changes: SimpleChanges): void {
      const product = changes['product']
      if (!product.isFirstChange() && product.previousValue) {
        const oldValue = product.previousValue.name
        const newValue = product.currentValue.name
        console.log(`Produkt zmieniony z ${oldValue} na ${newValue}`)
      }
  }

  buy() {
    this.bought.emit()
  }

}
