import * as type from '../config/constants';
import { TodoState } from '../models/todo';

export default function todo(state, action) : TodoState{
    switch (action.type){
        case type.TODO_ADD_ITEM:
        return Object.assign({},state,{items:[...state.items,action.item]});
        case type.TODO_DELETE_ITEM:
        return Object.assign({},state,{items:state.items.filter(item => item.id !== action.item.id)});
        case type.TODO_SELECT_ITEM:
        return Object.assign({}, state,{selected: action.item});
        case type.TODO_GET_ALL_ITEMS:
        return Object.assign({}, state,{items:action.items});
        default:
        return state;
    }
}