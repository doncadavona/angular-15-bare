import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsNewComponent } from './pages/products-new/products-new.component';
import { ToDoEditComponent } from './pages/to-do-edit/to-do-edit.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { ToDoNewComponent } from './pages/to-do-new/to-do-new.component';
import { ToDoShowComponent } from './pages/to-do-show/to-do-show.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/new', component: ProductsNewComponent },

  { path: 'to-dos', component: ToDoListComponent },
  { path: 'to-dos/new', component: ToDoNewComponent },
  { path: 'to-dos/edit/:id', component: ToDoEditComponent },
  { path: 'to-dos/:id', component: ToDoShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
