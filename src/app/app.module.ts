import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { ToDoShowComponent } from './pages/to-do-show/to-do-show.component';
import { ToDoNewComponent } from './pages/to-do-new/to-do-new.component';
import { ToDoEditComponent } from './pages/to-do-edit/to-do-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { Pipe1Pipe } from './pipes/pipe-1.pipe';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './pages/product-list/store/reducers';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductNewComponent } from './pages/product-new/product-new.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductShowComponent } from './pages/product-show/product-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoShowComponent,
    ToDoNewComponent,
    ToDoEditComponent,
    Pipe1Pipe,
    HomeComponent,
    NavbarComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductNewComponent,
    BreadcrumbsComponent,
    ProductShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
    StoreModule.forRoot({ products: productReducer }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
