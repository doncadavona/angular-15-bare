import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Page } from 'src/app/enums/pages.enum';
import { breadcrumbPageMap } from 'src/app/models/breadcrumb';
import { Product } from 'src/app/models/product';
import { Products } from 'src/app/models/products';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { ProductsService } from 'src/app/services/products.service';
import { selectProducts } from './store/selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$!: Observable<readonly Product[]>;
  products?: Product[];
  columns!: string[];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
    private store: Store,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set([breadcrumbPageMap[Page.PRODUCTS_LIST]]);
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

    // WIP: Move this this to the state store.
    this.productsService.list().subscribe((products: Products) => {
      this.products = products.products;
      console.log("products", products.products);
    });

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
