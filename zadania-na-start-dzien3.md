# Zadania na start
## Dzień 3

### Zadanie #1 | Komponent obsługujący menu

> Powtórka dynamicznego generowania elementów na template + określania modelu danych.  
> Wprowadzenie do _routingu_

1.1 Utwórz nowy komponent `main-menu`, posiadający tzw. `inline-template`. Moduł `app` powinien być _Właścicielem_ tego komponentu

1.2 Do komponentu dodaj następujący template:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
  <button class="navbar-toggler" type="button">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse show">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/products">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/favorites">Favorites</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/orders">Orders</a>
      </li>
    </ul>
  </div>
  <div class="text-light">
    <a class="btn btn-primary" href="/add-new-product">
      Add new
    </a>
  </div>
</nav>
```

1.3 Dodaj odpowiedni model danych dla linków generowanych w `li.nav-item` + `interface` w TypeScript
Tak, aby były one zapisane w logice komponentu i generowały się dynamicznie na `template`. Samodzielnie wymyśl nazwę dla `intefrace` + określ jakie pola przechowuje, utwórz odpowiednią kolekcję danych z linkami.
        
1.4 Osadź komponent na widoku głównym:

```html
<main class="container" style="margin-top: 100px;">
  <h1>Czy to nadal dziala?</h1>
  <h3>{{ title }}</h3>
  <h4>{{ opis }}</h4>
  <!-- właśnie tutaj dodaj nasze menu -->
  <p><app-product-list></app-product-list></p>
  <p><app-key-logger></app-key-logger></p>
</main>

```

1.5 sprawdź, czy linki działają i zmieniają pasek `URL` przeglądarki

### Zadanie #2 | dodatkowe * | `RWD` dla naszego `main-menu`

> Zadanie dodatkowe, poszukiwanie informacji w dokumentacji Angular. Ocena jej dokładności / przydatności

2.1 Wiedząc, że `bootstrap` obsługuje tzw. Responsive Web Design. I jeśli zmniejszysz okno przeglądarki to pojawi się `button` z tzw. _burger menu_ w naszym `main-menu` dokładnie ten:

```html
<button class="navbar-toggler" type="button">
    <span class="navbar-toggler-icon"></span>
</button>
```
oraz, że jeśli usuniesz klasę css `show` z elementu:  `<div class="collapse navbar-collapse show">`, to schowasz listę menu,

2.2 Zaproponuj dynamiczną obsługę zwijania / rozwijania `menu` za pomocą dodawania - odejmowania tej klas z elementu `div.collapse.navbar-collapse` z wykorzystaniem wbudowanej dyrektywy `ngClass`:

- [ngClass](https://angular.io/api/common/NgClass), sprawdź przykład jako obiekt `{ 'nazwa klasy' : true }`
- [ngClass](https://angular.dev/guide/directives#using-ngclass-with-an-expression), przykłady z nowej dokumentacji (>=`v17`)

2.3 Uruchom wspomniany wyżej (2.1) `button` - który po kliknięciu będzie _toggle'ował_ klasę `show`.
