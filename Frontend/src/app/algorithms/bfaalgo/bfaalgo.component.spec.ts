import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BFAalgoComponent } from './bfaalgo.component';

describe('BFAalgoComponent', () => {
  let component: BFAalgoComponent;
  let fixture: ComponentFixture<BFAalgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BFAalgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BFAalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
