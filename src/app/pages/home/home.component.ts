import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PoMenuItem } from '@po-ui/ng-components';
import { CepHistoryStateService } from 'src/app/services/state/cep-history-state.service';
import { CepService } from 'src/app/services/http/pesquisa-cep.service';
import { EnderecoModel } from 'src/app/models/endereco.model';

@Component({
  selector: 'app-home',
  templateUrl: './view/home.component.html',
  styleUrls: ['./view/home.component.scss'],
})
export class HomeComponent {
  endereco!: EnderecoModel;
  cepControl = new FormControl('');  

  constructor(
    private _cepService: CepService,
    private _cepHistoryStateService: CepHistoryStateService
  ) {}

  

  pesquisarCep() {
    const dados = this.cepControl.value as string;

    this._cepService.buscarCep(dados).subscribe((data: EnderecoModel) => {
      this.endereco = data;

      this._cepHistoryStateService.adicionarCepAoHistorico(data.cep)
    }),
      () => {
        alert('Erro ao buscar CEP:');
      };
  }
}
