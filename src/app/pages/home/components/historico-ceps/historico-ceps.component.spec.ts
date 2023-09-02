import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCepsComponent } from './historico-ceps.component';

describe('HistoricoCepsComponent', () => {
  let component: HistoricoCepsComponent;
  let fixture: ComponentFixture<HistoricoCepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoCepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoCepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
