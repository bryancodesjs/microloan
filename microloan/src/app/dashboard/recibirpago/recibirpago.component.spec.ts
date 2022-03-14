import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirpagoComponent } from './recibirpago.component';

describe('RecibirpagoComponent', () => {
  let component: RecibirpagoComponent;
  let fixture: ComponentFixture<RecibirpagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibirpagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibirpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
