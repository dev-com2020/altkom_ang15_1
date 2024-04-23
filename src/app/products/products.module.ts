import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CustomCurrencyPipe } from './custom-currency.pipe';
import { CopyrightDirective } from './copyright.directive';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CustomCurrencyPipe,
    CopyrightDirective,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    ProductComponent
  ],
  exports:[ProductListComponent]
})
export class ProductsModule { }
