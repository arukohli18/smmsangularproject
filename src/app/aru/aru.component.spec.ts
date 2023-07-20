import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AruComponent } from './aru.component';

describe('AruComponent', () => {
  let component: AruComponent;
  let fixture: ComponentFixture<AruComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AruComponent]
    });
    fixture = TestBed.createComponent(AruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
