import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/enums/pages.enum';
import { breadcrumbPageMap } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {
  constructor(public breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.set([breadcrumbPageMap[Page.PRODUCT_LIST], breadcrumbPageMap[Page.PRODUCT_NEW]]);
  }

  ngOnDestroy(): void {
    const products = this.breadcrumbService.breadcrumbs[0];
    this.breadcrumbService.navigateToCrumb(products);
  }
}
