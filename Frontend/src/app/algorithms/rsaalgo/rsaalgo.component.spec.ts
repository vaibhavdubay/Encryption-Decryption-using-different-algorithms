import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSAAlgoComponent } from './rsaalgo.component';

describe('RSAAlgoComponent', () => {
  let component: RSAAlgoComponent;
  let fixture: ComponentFixture<RSAAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSAAlgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RSAAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
