import { Page } from "../enums/pages.enum";

export class Breadcrumb {
  index!: number;
  path!: string;
  name!: string;

  constructor(partialValues: Partial<Breadcrumb>) {
    Object.assign(this, partialValues);
  }
}

export const breadcrumbPageMap = {
  [Page.PRODUCTS_LIST]: new Breadcrumb({ path: 'products', name: 'Products' }),
  [Page.PRODUCT_NEW]: new Breadcrumb({ path: 'new', name: 'New Product' }),
};
