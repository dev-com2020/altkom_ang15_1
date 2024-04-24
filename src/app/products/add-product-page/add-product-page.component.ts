import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  template: `
  <h2>Add new product</h2>
  <!-- <app-product-create></app-product-create> -->
  <div class="d-flex justify-content-center">
      <form class="form mt-2 w-50" #productForm="ngForm" (ngSubmit)="handleSubmit(productForm)" >
        <div class="form-group">
            <label for="productName">Product name</label>
            <div class="input-group mb-3">
            <div class="input-group-text">
                <i class="fa fa-edit"></i>
            </div>
            <input
                id="name"
                type="text"
                name="name"
                ngModel
                #nameRef="ngModel"
                minlength="3"
                required
                class="form-control"
            />
            </div>
            <div class="alert alert-danger" *ngIf="nameRef.errors && nameRef.touched">
                <div *ngIf="nameRef.errors['required']">Pole jest wymagane</div>
                <div *ngIf="nameRef.errors['minlength']">Podaj minimum {{nameRef.errors['minlength']['requiredLength']}} znaków</div>
            </div>
        </div>

        <div class="form-group">
            <label for="productPrice">Price</label>
            <div class="input-group mb-3">
            <div class="input-group-text">
                <i class="fa fa-tag"></i>
            </div>
            <input
                id="productPrice"
                type="number"
                name="price"
                ngModel
                required               
                class="form-control"
            />
            </div>
        </div>
        <div class="alert alert-danger" *ngIf="formError">
                {{formError}}
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-primary" type="submit">
              <i class="fa fa-plus-square"></i> Add product
            </button>
        </div>        
      </form>
  </div>
  `,
  styles: [`
  
    input.ng-invalid.ng-touched {
        border: 2px solid red;
    }
  
  `]
})
export class AddProductPageComponent {

    // Dodaj za pomocą DI odpowiedni service + wyślij form.value
    constructor(private productService: ProductsService) {}
    formError = ""

    handleSubmit(form: NgForm) {
        console.log(form);
        // console.dir(form);
        this.formError = "";
        if(form.invalid) {
            form.control.markAllAsTouched();
            this.formError = "Uzupenij wszystkie pola....";
            return;
        }
        // console.log("Wartość fromularza", form.value);
        
        const { name, price } = form.value;
        this.productService.addProduct(name, price).subscribe({
            next: () => {
                form.reset();
            },
            error: () => {
                this.formError = "Server error: Nie udao się wyslac fomularza...."
            },
            // complete: () => {}
        })
    }
}
