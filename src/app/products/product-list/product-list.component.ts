import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
selectedProduct = 'nieznany'

onBuy(name: string) {
  window.alert(`Dodaleś do listy ${name}!`)
}
}


