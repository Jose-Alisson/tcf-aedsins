import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QledComponent } from './qled.component';

describe('QledComponent', () => {
  let component: QledComponent;
  let fixture: ComponentFixture<QledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
