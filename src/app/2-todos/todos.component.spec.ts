/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, of } from 'rxjs';

// NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should load todos from the server', () => {
    const service = TestBed.get(TodoService);
    // fixture.debugElement.injector.get(TodoService);
    const data = [1, 2, 3];
    spyOn(service, 'getTodos').and.returnValue( of(data) );

    expect(component.todos).toBe(data);
  });
});
