import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCloseCssAnimComponent } from './open-close-css-anim.component';

describe('OpenCloseCssAnimComponent', () => {
  let component: OpenCloseCssAnimComponent;
  let fixture: ComponentFixture<OpenCloseCssAnimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenCloseCssAnimComponent]
    });
    fixture = TestBed.createComponent(OpenCloseCssAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
