import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetail }   from './views/todo-detail/todo.detail';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'detail/:id', component: TodoDetail },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
