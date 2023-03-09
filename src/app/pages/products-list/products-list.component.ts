import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/models/breadcrumb';
import { Product } from 'src/app/models/product';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { selectProducts } from './store/selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$!: Observable<readonly Product[]>;
  columns!: string[];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.init(new Breadcrumb({
      path: 'products',
      name: 'Products'
    }));
    this.setColumns();
    this.loadProducts();
  }

  /**
   * Navigates to add product page
   */
  addProduct(): void {
    this.router.navigate(['products', 'new']);
  }

  /**
   * Used in template to display the value of property for the table column
   * Important: product property should be same with table column name
   * @param product current product in iteration
   * @param column reference table column
   * @returns value of product property
   */
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
