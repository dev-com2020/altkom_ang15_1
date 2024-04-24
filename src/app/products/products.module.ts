import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CustomCurrencyPipe } from './custom-currency.pipe';
import { CopyrightDirective } from './copyright.directive';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductViewComponent } from './product-view/product-view.component';
// import { KeyLoggerComponent } from '../key-logger/key-logger.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CustomCurrencyPipe,
    CopyrightDirective,
    FavoritesComponent,
    ProductViewComponent,
    ProductCreateComponent,
    AddProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductComponent,
    ProductsRoutingModule
  ],
  exports:[ProductListComponent]
})
export class ProductsModule { }
