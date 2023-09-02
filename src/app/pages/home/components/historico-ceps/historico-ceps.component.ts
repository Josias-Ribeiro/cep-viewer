import { Component, OnInit } from '@angular/core';
import { CepHistoryStateService } from 'src/app/services/state/cep-history-state.service';

@Component({
  selector: 'historico-ceps',
  templateUrl: './view/historico-ceps.component.html',
  styleUrls: ['./view/historico-ceps.component.scss'],
})
export class HistoricoCepsComponent implements OnInit {
  historicoDeCeps: string[] = [];
  
  constructor(private _cepHistoryStateService: CepHistoryStateService) {}

  ngOnInit() {
    this._cepHistoryStateService.cepHistory$.subscribe((history) => {
      this.historicoDeCeps = history;
    });
  }
}
