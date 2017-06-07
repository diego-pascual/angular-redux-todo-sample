import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoState } from './models/todo';
import { TodoService } from './services/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})

export class AppComponent {
  title = 'Todo sample';
  todoState : Observable<Object>;
  items : Array<Todo>;
  ready : boolean = false;

  constructor(private todoService: TodoService){
    this.todoState = todoService.todoState;
  }

  ngOnInit(){
    this.todoState.subscribe((todoState) => {
      if (todoState)
      this.items=todoState['items'];
    });
    this.loadData();
  }

  onAddItem(name : string){
    this.todoService.addItem(name);
  }

  onDeleteItem(item : Todo){
    this.todoService.deleteItem(item.id)
  }

  loadData(){
    this.ready = false;
    this.todoService.getItems().then(this.ready = true);
  }

}
