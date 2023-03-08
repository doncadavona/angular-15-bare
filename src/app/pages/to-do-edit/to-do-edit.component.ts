import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from 'src/app/models/to-do';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.scss']
})
export class ToDoEditComponent {
  public toDo?: ToDo;
  public toDoForm?: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toDoService: ToDoService,
  ) {
    // 
  }

  public ngOnInit(): void {
    const toDoId = this.route.snapshot.paramMap.get('id');

    console.log("toDoId", toDoId);

    if (toDoId) {
      this.toDo = this.toDoService.getToDo(toDoId);

      this.toDoForm = this.formBuilder.group({
        name: [this.toDo?.name, [Validators.required, Validators.maxLength(32)]],
        description: [this.toDo?.description, [Validators.required, Validators.maxLength(255)]],
        isDone: [this.toDo?.isDone, Validators.required]
      });

      this.toDoForm.valueChanges.subscribe((value) => {
        console.log("toDoForm", value);
      });

    }
  }

  public onSubmit(): void {
    if (!this.toDo) return;

    console.log("WIP: Save ToDo...", this.toDo?.id);
    console.log("toDoForm.value", this.toDoForm?.value);

    this.toDoService.updateToDo(this.toDo.id, <ToDo>this.toDoForm?.value);
    this.router.navigate(["/to-dos", this.toDo.id]);
  }
}
