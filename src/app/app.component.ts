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
    deleteItem(itemToDelete){
      const newtodoList = this.todoList.filter((existingItem) =>
       existingItem !== itemToDelete);
       this.todoList = newtodoList;

        // const newtodoList = [];
        // for(var i =0; i<this.todoList.length;i++){
        //   const itemInExistList = this.todoList[i];
        //     if(this.todoList[i] === item){
        //       continue;
        //     }
        //     else{
        //       newtodoList.push(itemInExistList);
        //     }

        //     }
        //     this.todoList = newtodoList;
        }
      
}

