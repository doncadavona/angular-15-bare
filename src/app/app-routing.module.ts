import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToDoEditComponent } from './pages/to-do-edit/to-do-edit.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { ToDoShowComponent } from './pages/to-do-show/to-do-show.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  // /to-dos 
  // Working...
  { path: 'to-dos', component: ToDoListComponent },
  { path: 'to-dos/new', component: ToDoShowComponent },
  { path: 'to-dos/edit/:id', component: ToDoEditComponent },
  { path: 'to-dos/:id', component: ToDoShowComponent },

  // Not working, not sure why yet.
  // {
  //   path: 'to-do', component: ToDoListComponent, children: [
  //     { path: 'new', component: ToDoShowComponent },
  //     { path: 'edit/:id', component: ToDoEditComponent },
  //     { path: ':id', component: ToDoShowComponent },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
