import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo.list.html',
  styleUrls: ['./todo.list.css']
})

export class TodoList {
    @Input() items: Array<Todo>;
    @Output() onDeleteItem = new EventEmitter()

    deleteItem(item : Todo){
      this.onDeleteItem.next(item);
    }
}
