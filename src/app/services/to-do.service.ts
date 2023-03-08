import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  protected toDos: ToDo[] = [
    {
      id: "1",
      name: "To do 1",
      description: "Example description 1",
      isDone: false
    },
    {
      id: "2",
      name: "To do 2",
      description: "Example description 2",
      isDone: false
    },
    {
      id: "3",
      name: "To do 3",
      description: "Example description 3",
      isDone: false
    },
  ];

  constructor() { }

  public getToDos(): ToDo[] {
    return this.toDos;
  }

  public getToDo(id: string): ToDo | undefined {
    return this.getToDos().find(x => x.id === id);
  }

  public addToDo(toDo: ToDo): ToDo {
    this.toDos.push({
      id: Math.floor((Math.random() * 999999) + 1).toString(),
      name: toDo.name,
      description: toDo.description,
      isDone: false,
    });

    return toDo;
  }

  public updateToDo(id: string, toDo: ToDo): ToDo {
    for (let i = 0; i < this.toDos.length; i++) {
      if (id == this.toDos[i].id) {
        this.toDos[i].name = toDo.name;
        this.toDos[i].description = toDo.description;
        this.toDos[i].isDone = toDo.isDone;

        break;
      }
    }

    console.log("toDos", this.toDos);

    return toDo;
  }

  public deleteToDo(id: string): void {
    this.toDos = this.toDos.filter(x => x.id != id);
  }
}
