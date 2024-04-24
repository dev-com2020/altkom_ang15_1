import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { SampleModule } from './sample/sample.module';

@NgModule({
  declarations: [
    AppComponent,
    KeyLoggerComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule,
    AppRoutingModule,
    SampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
