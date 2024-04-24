import { Component } from '@angular/core';
import { MenuItem } from './menu-item';


@Component({
  selector: 'app-main-menu',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse show">
        <ul class="navbar-nav">
          <li class="nav-item" *ngFor="let item of menuItems">
            <a class="nav-link" [href]="item.link">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <div class="text-light">
        <a class="btn btn-primary" href="/add-new-product">
          Add new
        </a>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class MainMenuComponent {


    menuItems: MenuItem[] = [
      { link: "/", title: "Home" },
      { link: "/products", title: "Products" },
      { link: "/favorites", title: "Favorites" },
      { link: "/orders", title: "Orders" },
    ]
}
