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

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoShowComponent,
    ToDoNewComponent,
    ToDoEditComponent,
    Pipe1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
