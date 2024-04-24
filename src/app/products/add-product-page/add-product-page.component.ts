import { Component } from '@angular/core';

@Component({
  template: `
  <h2>Add new product</h2>
  <app-product-create></app-product-create>
  <div class="d-flex justify-content-center">
      <form class="form mt-2 w-50" >
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
                required
                class="form-control"
            />
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
                required
                class="form-control"
            />
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-primary" type="submit">
              <i class="fa fa-plus-square"></i> Add product
            </button>
        </div>
      </form>
  </div>
  `
})
export class AddProductPageComponent {

}
