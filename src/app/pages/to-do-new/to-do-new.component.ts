import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDo } from 'src/app/models/to-do';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-new',
  templateUrl: './to-do-new.component.html',
  styleUrls: ['./to-do-new.component.scss']
})
export class ToDoNewComponent {
  public toDoForm: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toDoService: ToDoService,
  ) {
    this.toDoForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(32)]],
      description: ["", [Validators.required, Validators.maxLength(255)]],
    });

    this.toDoForm.valueChanges.subscribe((value) => {
      console.log("toDoForm", value);
    });
  }

  public onSubmit(): void {
    console.log("toDoForm.value", this.toDoForm.value);

    this.toDoService.addToDo(<ToDo>this.toDoForm.value);
    this.router.navigate(["/to-dos"]);
  }
}
