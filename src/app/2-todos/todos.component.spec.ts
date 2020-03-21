/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
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

describe('TodosComponent', () => {
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
  });

  xit('should load todos from the server', () => {
    const service = TestBed.get(TodoService);
    // fixture.debugElement.injector.get(TodoService);
    const data = [1, 2, 3];
    spyOn(service, 'getTodos').and.returnValue( of(data) );

    fixture.detectChanges();

    expect(component.todos).toBe(data);
  });

  it('should load todos from the server', fakeAsync(() => {
    const service = TestBed.get(TodoService);
    const data = [1, 2, 3];
    spyOn(service, 'getTodosPromise').and.returnValue( Promise.resolve(data) );

    fixture.detectChanges();

    // fixture.whenStable().then(() => {
    //   expect(component.todos).toBe(data);
    // });

    tick();
    expect(component.todos).toBe(data);
  }));
});
