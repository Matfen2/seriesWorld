import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrangerShowComponent } from './stranger-show.component';

describe('StrangerShowComponent', () => {
  let component: StrangerShowComponent;
  let fixture: ComponentFixture<StrangerShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrangerShowComponent]
    });
    fixture = TestBed.createComponent(StrangerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
