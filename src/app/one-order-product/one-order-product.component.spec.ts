import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOrderProductComponent } from './one-order-product.component';

describe('OneOrderProductComponent', () => {
  let component: OneOrderProductComponent;
  let fixture: ComponentFixture<OneOrderProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOrderProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneOrderProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
