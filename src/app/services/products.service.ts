import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductsPagination } from '../models/products-pagination';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  protected url = "https://dummyjson.com";

  constructor(private http: HttpClient) { }

  public list(): Observable<ProductsPagination> {
    return this.http.get<ProductsPagination>(this.url + "/products")
      .pipe(
        catchError(this.handleError)
      );
  }

  public get(id: string): Observable<Product> {
    return this.http.get<Product>(this.url + "/products/" + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  public update() {
    // 
  }

  public delete(id: string) {
    // 
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
