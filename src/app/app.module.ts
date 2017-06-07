import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Vendor Components (Material) */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdProgressSpinnerModule } from '@angular/material';

/** App components */
import { AppComponent } from './app.component';
import { TodoDetail } from './views/todo-detail/todo.detail';
import { TodoList } from './views/todo-list/todo.list';
import { TodoAdd } from './views/todo-add/todo.add';

/** Http */
import { HttpModule } from '@angular/http';
import { Net } from './helper/net';

/** Routing */
import { AppRoutingModule } from './routes';

/** Redux */
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import Reducers from './reducers/todo';
const reducers = compose(combineReducers)({todo: Reducers});

@NgModule({
  declarations: [
    AppComponent,
    TodoDetail,
    TodoList,
    TodoAdd
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdProgressSpinnerModule,
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [Net, StoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
