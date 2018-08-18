import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrackbyComponent } from './list-trackby.component';

describe('ListTrackbyComponent', () => {
  let component: ListTrackbyComponent;
  let fixture: ComponentFixture<ListTrackbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTrackbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
