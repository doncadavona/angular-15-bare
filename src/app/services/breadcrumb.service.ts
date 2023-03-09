import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Breadcrumb } from "../models/breadcrumb";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumbs!: Breadcrumb[];

  constructor(private router: Router) {
    this.breadcrumbs = [];
  }

  /**
   * Adds the breadcrumb to the end of the 
   * @param crumb new path/crumb to be added to the list
   */
  add(crumb: Breadcrumb): void {
    this.breadcrumbs = this.breadcrumbs.concat({
      ...crumb,
      index: this.breadcrumbs.length
    });
  }

  /**
   * Resets the list to empty
   */
  reset(): void {
    this.breadcrumbs = [];
  }

  /**
   * Sets the current list to the specified breadcrumb list
   * @param breadcrumbs reference list of breadcrumbs
   */
  set(breadcrumbs: Breadcrumb[]): void {
    this.breadcrumbs = breadcrumbs.map((breadcrumb, index) => {
      return {
        ...breadcrumb,
        index
      };
    });
  }

  /**
   * Filters the breadcrumb up to the index of the selected breadcrumb, and navigate to the selected crumb
   * @param crumb selected breadcrumb 
   */
  navigateToCrumb(crumb: Breadcrumb): void {
    this.breadcrumbs = this.breadcrumbs.filter((breadcrumb) => breadcrumb.index <= crumb.index);
    const paths = this.breadcrumbs.map((breadcrumb) => breadcrumb.path);
    this.router.navigate(paths);
  }

}