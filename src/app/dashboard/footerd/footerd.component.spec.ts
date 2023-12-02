import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterdComponent } from './footerd.component';

describe('FooterdComponent', () => {
  let component: FooterdComponent;
  let fixture: ComponentFixture<FooterdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterdComponent]
    });
    fixture = TestBed.createComponent(FooterdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
