import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomWhatsappComponent } from './bottom-whatsapp.component';

describe('BottomWhatsappComponent', () => {
  let component: BottomWhatsappComponent;
  let fixture: ComponentFixture<BottomWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomWhatsappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
