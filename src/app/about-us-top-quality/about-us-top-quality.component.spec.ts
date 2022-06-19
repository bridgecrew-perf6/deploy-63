import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsTopQualityComponent } from './about-us-top-quality.component';

describe('AboutUsTopQualityComponent', () => {
  let component: AboutUsTopQualityComponent;
  let fixture: ComponentFixture<AboutUsTopQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsTopQualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsTopQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
