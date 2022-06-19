import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsTrustedByComponent } from './about-us-trusted-by.component';

describe('AboutUsTrustedByComponent', () => {
  let component: AboutUsTrustedByComponent;
  let fixture: ComponentFixture<AboutUsTrustedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsTrustedByComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsTrustedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
