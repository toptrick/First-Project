import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoComponent, todo } from './list-todo.component';

describe('ListTodoComponent', () => {
  let component: ListTodoComponent;
  let fixture: ComponentFixture<ListTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
   
   expect(component).toBeTruthy();
  });
  it('should push value to todos and return the length expected to be 4',()=>{
    component.todos.push(new todo(1,'hello',new Date(),false))
    expect(component.todos.length).toEqual(4);
  });
});
