import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanseShowComponent } from './expanse-show.component';

describe('ExpanseShowComponent', () => {
  let component: ExpanseShowComponent;
  let fixture: ComponentFixture<ExpanseShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpanseShowComponent]
    });
    fixture = TestBed.createComponent(ExpanseShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
