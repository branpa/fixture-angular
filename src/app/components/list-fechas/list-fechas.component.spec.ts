import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFechasComponent } from './list-fechas.component';

describe('ListFechasComponent', () => {
  let component: ListFechasComponent;
  let fixture: ComponentFixture<ListFechasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFechasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
