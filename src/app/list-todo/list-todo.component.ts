import { Component, OnInit } from '@angular/core';


export class todo{
 constructor(
   public id: number,
   public description: String,
   public targetDate: Date,
   public status: boolean
   ){}

}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos=[
    new todo(1,'Welcome to India', new Date(),false),
    new todo(2,'To visit Ranchi', new Date(),true),
    new todo(3,'Had dinner with CEO', new Date(),false)
  ]
  constructor() { }

  ngOnInit() {
  }

}
