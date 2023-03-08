import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from 'src/app/models/to-do';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-show',
  templateUrl: './to-do-show.component.html',
  styleUrls: ['./to-do-show.component.scss']
})
export class ToDoShowComponent {
  public toDo?: ToDo;

  public constructor(private route: ActivatedRoute, private router: Router, private toDoService: ToDoService) {
    // 
  }

  public ngOnInit(): void {
    const toDoId = this.route.snapshot.paramMap.get('id');

    console.log("toDoId", toDoId);

    if (toDoId) {
      this.toDo = this.toDoService.getToDo(toDoId);
    }
  }

  public delete(id: string): void {
    console.log("WIP: Delete ToDo...", id);

    this.toDoService.deleteToDo(id);
    this.router.navigate(["/to-dos"]);
  }
}
