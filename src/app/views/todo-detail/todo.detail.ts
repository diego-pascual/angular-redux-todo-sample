import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoState } from '../../models/todo';
import { TodoService } from '../../services/todo';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo.detail.html',
  styleUrls: ['./todo.detail.css'],
  providers: [TodoService]
})

export class TodoDetail {
    todoState : Observable<Object>;
    selectedItem: Todo;
    ready : boolean = false;

    constructor(
      private todoService: TodoService,
      private route: ActivatedRoute 
    ) {
      this.todoState = todoService.todoState;
    }
    //You can do: this.route.navigate('/clients') or this.route.navigate(['/clients',2])
    ngOnInit(): void {
        this.route.params
        .subscribe(params => {
          if ((!this.selectedItem) || (this.selectedItem.id !== params.id)){
            this.ready = false;
            this.todoService.getItem(params.id, () => this.ready = true);
          }
      });

        this.todoState.subscribe(todoState => {
          if (todoState)
          this.selectedItem = todoState['selected'];
        });
  }
}
