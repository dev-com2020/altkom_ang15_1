# Praca z routingiem

### P1 - Dodanie tablicy routingu

P1.1 Aby zrozumieć routing, potrzebujemy przykładowej pustej tablicy z `Routes`.

P1.2 Wygenerujemy ją poleceniem:

```shell
ng g m sample --routing
```

tzn. `ng generate module sample --routing`

P1.3 Moduł `sample` nie przyda nam sie do niczego, ale — skorzystamy z wygenerowanego wzorca: `sample-routing.module.ts`

### P2 - Zadanie z routingu:

P2.1 Utwórz `products-routing.module.ts` analogicznie do `sample-routing` i podczep do go naszego moduu `products`

P2.2 Dodaj go (zaimportuj) przez `products.module`

P2.3 Utwórz w nim (`routing`) tablice routingu - gdzie będą odniesienia do:

```
    /products -> product-list component
    /favorites -> favorites component
    /add-new-product -> product-create component
```

sprawdz liniki w `main-menu` aby skonfrontować poprawność.

Zdejmij komponenty `favorites` i `product-create` z `product-list` (od teraz będą obsugiwane przez routing).

Dodanie nowego modulu razem z tablica routingu + import:
```
ng g m auth --routing --module=app --dry-run
```