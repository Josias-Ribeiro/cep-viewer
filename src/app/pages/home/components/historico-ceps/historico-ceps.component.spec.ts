import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCepsComponent } from './historico-ceps.component';
import { MaterialCoreModule } from 'src/app/shared/modules/material.core.module';

describe('HistoricoCepsComponent', () => {
  let component: HistoricoCepsComponent;
  let fixture: ComponentFixture<HistoricoCepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoCepsComponent ],
      imports: [MaterialCoreModule]
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
