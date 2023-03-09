import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/enums/pages.enum';
import { breadcrumbPageMap } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss']
})
export class ProductsNewComponent implements OnInit {
  constructor(public breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.set([breadcrumbPageMap[Page.PRODUCTS_LIST], breadcrumbPageMap[Page.PRODUCT_NEW]]);
  }

  ngOnDestroy(): void {
    const products = this.breadcrumbService.breadcrumbs[0];
    this.breadcrumbService.navigateToCrumb(products);
  }
}
