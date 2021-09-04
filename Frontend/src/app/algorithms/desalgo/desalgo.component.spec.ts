import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DESalgoComponent } from './desalgo.component';

describe('DESalgoComponent', () => {
  let component: DESalgoComponent;
  let fixture: ComponentFixture<DESalgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DESalgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DESalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
