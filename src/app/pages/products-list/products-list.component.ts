import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$!: Observable<any[]>;
  columns!: string[];

  constructor() {}

  ngOnInit(): void {
    this.setColumns();
    this.loadProducts();
  }

  private loadProducts(): void {
    // TODO: Implement selector
    this.products$ = of([
      { id: 0, 
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple"
      },
      { id: 1, 
        title: "iPhone 14",
        description: "An apple mobile which exceeds all apples"
      },
      { id: 2, 
        title: "Samsung Galaxy S22",
        description: "The phone that makes everyday epic"
      },
    ]);
  }

  private setColumns(): void {
    this.columns = [
      'title', 'description'
    ]
  }
}
