import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFunctionsPerformComponent } from './list-functions-perform.component';

describe('ListFunctionsPerformComponent', () => {
  let component: ListFunctionsPerformComponent;
  let fixture: ComponentFixture<ListFunctionsPerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFunctionsPerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFunctionsPerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
