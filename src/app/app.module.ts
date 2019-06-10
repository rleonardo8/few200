import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ListComponent } from './components/todo-list/list/list.component';
import { EntryComponent } from './components/todo-list/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ListComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
