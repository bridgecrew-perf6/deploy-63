import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewerlyWatchesComponent } from './jewerly-watches.component';

describe('JewerlyWatchesComponent', () => {
  let component: JewerlyWatchesComponent;
  let fixture: ComponentFixture<JewerlyWatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewerlyWatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewerlyWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
