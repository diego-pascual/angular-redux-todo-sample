import * as type from '../config/constants';
import { Todo } from '../models/todo';

export function todoAddItem(item : Todo){
    return {
        type : type.TODO_ADD_ITEM,
        item
    }
}

export function todoDeleteItem(item : Todo){
    return {
        type : type.TODO_DELETE_ITEM,
        item
    }
}

export function todoSelectItem(item : Todo){
    return {
        type : type.TODO_SELECT_ITEM,
        item
    }
}

export function todoGetAllItem(items : Array<Todo>){
    return {
        type : type.TODO_GET_ALL_ITEMS,
        items
    }
}