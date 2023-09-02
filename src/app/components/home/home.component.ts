import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PoMenuItem } from '@po-ui/ng-components';
import { CepService } from 'src/app/services/pesquisa-cep.service';

@Component({
  selector: 'app-home',
  templateUrl: './view/home.component.html',
  styleUrls: ['./view/home.component.scss'],
})
export class HomeComponent {
  endereco: any;
  cepControl = new FormControl('', Validators.maxLength(8));

  constructor(private _cepService: CepService) {}

  pesquisarCep() {
    const dados  = this.cepControl.value as string

    this._cepService.buscarCep(dados).subscribe((data) => {
      this.endereco = data;

      console.log(this.endereco)
    }),
      () => {
        alert('Erro ao buscar CEP:');
      };
  }
}
