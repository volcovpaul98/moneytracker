import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensechartComponent } from './expensechart.component';

describe('ExpensechartComponent', () => {
  let component: ExpensechartComponent;
  let fixture: ComponentFixture<ExpensechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
