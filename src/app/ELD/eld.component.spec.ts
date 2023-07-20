import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldComponent } from './eld.component';

describe('EldComponent', () => {
  let component: EldComponent;
  let fixture: ComponentFixture<EldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EldComponent]
    });
    fixture = TestBed.createComponent(EldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EldComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
 //   expect(component).toBeTruthy();
  });
});


  it(`should have as title 'cris'`, () => {
    const fixture = TestBed.createComponent(EldComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cris');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EldComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cris app is running!');
  });

