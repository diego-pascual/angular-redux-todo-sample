import { Injectable } from '@angular/core';
import { Net } from '../helper/net';
import { Api } from '../config/api';
import { Todo } from '../models/todo';
import * as actions from '../actions/todo';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';


@Injectable()
export class TodoService {

  todoState : Observable<Object>;

  constructor(private net: Net, private store: Store<any>) {
    this.todoState = this.store.select('todo');
  }

  public addItem(name : string): any{
      this.net.request(Api.items,'post',{name})
      .then(result => this.store.dispatch(actions.todoAddItem(result as Todo)));
  }

  public deleteItem(id : string): any{
      this.net.request(Api.items + '/' + id,'delete',null)
      .then(result => this.store.dispatch(actions.todoDeleteItem(result as Todo)));
  }

  public getItem(id : string, callback): any{
      this.net.request(Api.items + '/' + id, 'get', null)
          .then((result) => {
              this.store.dispatch(actions.todoSelectItem(result as Todo));
              callback();
          })
  }

  public getItems(): any{
      return new Promise((resolve, reject) => {
          this.net.request(Api.items, 'get', null)
              .then((result) => {
                  this.store.dispatch(actions.todoGetAllItem(result as Array<Todo>))
                  resolve();
              })
              .catch(error => reject(error));
      });
  }

}