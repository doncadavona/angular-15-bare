import { Component } from '@angular/core';
import { Page } from 'src/app/enums/pages.enum';
import { breadcrumbPageMap } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent {
  constructor(public breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.set([breadcrumbPageMap[Page.PRODUCT_LIST]]);

    // TODO: breadcrumbService.add(path: 'view/' + product.id, name: 'product.name')
  }

  ngOnDestroy(): void {
    const products = this.breadcrumbService.breadcrumbs[0];
    this.breadcrumbService.navigateToCrumb(products);
  }
}
