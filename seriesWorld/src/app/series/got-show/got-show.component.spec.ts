import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotShowComponent } from './got-show.component';

describe('GotShowComponent', () => {
  let component: GotShowComponent;
  let fixture: ComponentFixture<GotShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotShowComponent]
    });
    fixture = TestBed.createComponent(GotShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
