import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

const routes: Routes = [
    { path: "", component: KeyLoggerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
