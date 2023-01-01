import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

// importing Model
import { Todo } from './model/Todo';

import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit, AfterViewChecked {

  public totalRows:number = 0;
  public startLinkIndex:number = 1;

  public todoList:any = [];
  public newTodo:any = '';
  public selectedTodo:any = [];

  public searchedData:any = '';

  // public searchedItem:any = '';

  constructor(
    private todoService:TodoService,
    private dt:DataShareService
  ) {

    this.newTodo = new Todo(
      '',
      '',
      this.todoService.getCurrentTimeStamps()
    );
  }

  ngOnInit(): void {
    this.populate();
  }

  ngAfterViewChecked(): void {
      this.dt.myData.subscribe((res:any)=>{
        this.searchedData = res;
      });
      console.log(`At todo component searched data : ${this.searchedData}`);
  }

  populate(){
    this.todoService.getAllTodos()
    .subscribe((res:any)=>{
      console.log(res);
      this.totalRows = res.length;
      this.todoList = res;
    });
  }

  public resetFields(){
    this.newTodo.title = this.newTodo.desc = '';
  }

  onSubmit(){
    console.log(this.newTodo);

    let data = {
      'title':this.newTodo.title,
      'desc':this.newTodo.desc,
      'created':this.newTodo.created
    };

    this.todoService.addTodo(data)
    .subscribe((res:any)=>{
      console.log(res);
      
      alert(res.msg);
      this.populate();
      this.resetFields();
    });
    
  }

  public onProvide(todo:any){
    // console.log(todo);

    this.selectedTodo = todo;
    console.log(this.selectedTodo);

    this.newTodo = new Todo(
      this.selectedTodo.title,
      this.selectedTodo.description,
      this.todoService.getCurrentTimeStamps()
    );

  }

  public onUpdate(){
    
    let id = this.selectedTodo._id;

    let todoData = {
      'title':this.newTodo.title,
      'desc':this.newTodo.desc,
      'created':this.newTodo.created
    }

    this.todoService.updateTodo(id,todoData)
    .subscribe((res:any)=>{
      console.log(res);

      alert(res.msg);
      this.populate();
      this.resetFields();
    });
  }

  public onDelete(){
    var confirmDelete:any = alert("Are you sure you want to delete this reecord?");

    if (confirmDelete !==null) {
      let id = this.selectedTodo._id;

      this.todoService.deleteTodo(id)
      .subscribe((res:any)=>{
        alert(res.msg);
        this.populate();
        this.resetFields();
      });

    }
  }

  

}
