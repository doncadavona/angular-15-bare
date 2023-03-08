import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { fadeAnimation } from 'src/app/components/animations';
import { Product } from 'src/app/models/product';
import { selectProducts } from './store/selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  animations: [fadeAnimation]
})
export class ProductsListComponent implements OnInit {
  products$!: Observable<readonly Product[]>;
  columns!: string[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.setColumns();
    this.loadProducts();
  }

  getColumnValue(product: Product, column: string): string {
    return product[column as keyof Product] as string;
  }

  private loadProducts(): void {
    // TODO: Implement selector
    this.products$ = this.store.select(selectProducts);

    /* this.products$ = of([
      {
        id: 0,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple"
      },
      {
        id: 1,
        title: "iPhone 14",
        description: "An apple mobile which exceeds all apples"
      },
      {
        id: 2,
        title: "Samsung Galaxy S22",
        description: "The phone that makes everyday epic"
      },
    ] as Product[]); */
  }

  private setColumns(): void {
    this.columns = [
      'title', 'description'
    ]
  }
}
