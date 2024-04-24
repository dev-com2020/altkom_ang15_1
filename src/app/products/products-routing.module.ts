import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';

const routes: Routes = [
  { path:"products", component: ProductListComponent },
  { path:"favorites", component: FavoritesComponent },
  { path:"add-new-product", component: AddProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
