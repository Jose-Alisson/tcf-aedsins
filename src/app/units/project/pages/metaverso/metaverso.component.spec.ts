import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaversoComponent } from './metaverso.component';

describe('MetaversoComponent', () => {
  let component: MetaversoComponent;
  let fixture: ComponentFixture<MetaversoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaversoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaversoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
