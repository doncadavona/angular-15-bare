import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { selectProducts } from './store/selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$!: Observable<readonly Product[]>;
  columns!: string[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.setColumns();
    this.loadProducts();
  }

  addProduct(): void {
    alert('To be implemented.');
  }

  getColumnValue(product: Product, column: string): string {
    return product[column as keyof Product] as string;
  }

  private loadProducts(): void {
    this.products$ = this.store.select(selectProducts);
  }

  private setColumns(): void {
    this.columns = [
      'title', 'description'
    ]
  }
}
