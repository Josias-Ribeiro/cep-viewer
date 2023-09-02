import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PoMenuItem } from '@po-ui/ng-components';
import { CepHistoryStateService } from 'src/app/services/cep-history-state.service';
import { CepService } from 'src/app/services/pesquisa-cep.service';

@Component({
  selector: 'app-home',
  templateUrl: './view/home.component.html',
  styleUrls: ['./view/home.component.scss'],
})
export class HomeComponent implements OnInit {
  endereco: any;
  cepControl = new FormControl('', Validators.maxLength(8));
  historicoDeCeps: string[] = [];

  constructor(
    private _cepService: CepService,
    private _cepHistoryStateService: CepHistoryStateService
  ) {}

  ngOnInit() {
    this._cepHistoryStateService.cepHistory$.subscribe((history) => {
      this.historicoDeCeps = history;
    });
  }

  pesquisarCep() {
    const dados = this.cepControl.value as string;

    this._cepService.buscarCep(dados).subscribe((data) => {
      this.endereco = data;

      this._cepHistoryStateService.adicionarCepAoHistorico(data.cep)
    }),
      () => {
        alert('Erro ao buscar CEP:');
      };
  }
}
