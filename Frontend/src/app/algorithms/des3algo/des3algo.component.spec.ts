import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DES3algoComponent } from './des3algo.component';

describe('DES3algoComponent', () => {
  let component: DES3algoComponent;
  let fixture: ComponentFixture<DES3algoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DES3algoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DES3algoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
