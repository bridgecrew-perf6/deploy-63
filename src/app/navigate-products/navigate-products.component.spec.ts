import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateProductsComponent } from './navigate-products.component';

describe('NavigateProductsComponent', () => {
  let component: NavigateProductsComponent;
  let fixture: ComponentFixture<NavigateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
