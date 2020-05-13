import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    todoList = [];
    newTodo = ' ';
    onChange($event){
       this.newTodo = $event.target.value;       
    }
    create(){
      this.todoList.push(this.newTodo);
      this.newTodo = '';
    }
    allDelete(){
      this.todoList = [];
    }
    deleteItem(list){
        var index = this.todoList.indexof(list);
    
}
