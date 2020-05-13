import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorytmyComponent } from './algorytmy.component';

describe('AlgorytmyComponent', () => {
  let component: AlgorytmyComponent;
  let fixture: ComponentFixture<AlgorytmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorytmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorytmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
