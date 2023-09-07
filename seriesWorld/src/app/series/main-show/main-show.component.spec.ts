import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShowComponent } from './main-show.component';

describe('MainShowComponent', () => {
  let component: MainShowComponent;
  let fixture: ComponentFixture<MainShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainShowComponent]
    });
    fixture = TestBed.createComponent(MainShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
