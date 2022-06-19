import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsTestimonialComponent } from './about-us-testimonial.component';

describe('AboutUsTestimonialComponent', () => {
  let component: AboutUsTestimonialComponent;
  let fixture: ComponentFixture<AboutUsTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsTestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
