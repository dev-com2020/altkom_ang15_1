# Praca z formularzami

### P2 - Dodanie formularza do strony `add-product-page` formularza

P2.1 Dodaj do komponentu następujący template:

```html

    <div class="d-flex justify-content-center">
    <h2>Add new product</h2>
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

```