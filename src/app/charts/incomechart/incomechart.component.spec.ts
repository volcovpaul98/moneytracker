import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomechartComponent } from './incomechart.component';

describe('IncomechartComponent', () => {
  let component: IncomechartComponent;
  let fixture: ComponentFixture<IncomechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
