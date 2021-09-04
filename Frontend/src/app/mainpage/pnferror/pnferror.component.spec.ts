import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNFErrorComponent } from './pnferror.component';

describe('PNFErrorComponent', () => {
  let component: PNFErrorComponent;
  let fixture: ComponentFixture<PNFErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PNFErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PNFErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
