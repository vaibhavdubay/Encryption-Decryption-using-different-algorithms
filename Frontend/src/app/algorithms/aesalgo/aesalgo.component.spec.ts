import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AESalgoComponent } from './aesalgo.component';

describe('AESalgoComponent', () => {
  let component: AESalgoComponent;
  let fixture: ComponentFixture<AESalgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AESalgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AESalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
