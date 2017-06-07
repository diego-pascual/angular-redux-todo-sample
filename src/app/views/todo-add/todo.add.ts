import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-add',
  templateUrl: './todo.add.html',
  styleUrls: ['./todo.add.css']
})

export class TodoAdd {
    name: string;
    @Output() onAddItem = new EventEmitter() 

    add(){
      this.onAddItem.next(this.name);
    }
}
