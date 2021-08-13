import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObservableComponent } from './list-observable.component';

describe('ListObservableComponent', () => {
  let component: ListObservableComponent;
  let fixture: ComponentFixture<ListObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
