import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AedsinsComponent } from './aedsins.component';

describe('AedsinsComponent', () => {
  let component: AedsinsComponent;
  let fixture: ComponentFixture<AedsinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AedsinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AedsinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
