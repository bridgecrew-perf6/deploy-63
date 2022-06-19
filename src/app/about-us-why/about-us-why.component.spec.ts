import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsWhyComponent } from './about-us-why.component';

describe('AboutUsWhyComponent', () => {
  let component: AboutUsWhyComponent;
  let fixture: ComponentFixture<AboutUsWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsWhyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
