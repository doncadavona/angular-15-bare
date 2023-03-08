import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDo } from 'src/app/models/to-do';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  toDos$!: Observable<ToDo[]>;
  
  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDos$ = of(this.toDoService.getToDos());
  }

}
