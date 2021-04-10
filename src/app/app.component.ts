import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  model = new Model();

  getItems(){
    return this.model.items;
  }

  addItem(value){
    if(value!=""){
      this.model.items.push(new TodoItem(value));
    }
  }

  delete(i){
    this.getItems().splice(i,1);
  }
}
