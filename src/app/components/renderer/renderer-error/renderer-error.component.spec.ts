import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererErrorComponent } from './renderer-error.component';

describe('RendererErrorComponent', () => {
  let component: RendererErrorComponent;
  let fixture: ComponentFixture<RendererErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendererErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendererErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
