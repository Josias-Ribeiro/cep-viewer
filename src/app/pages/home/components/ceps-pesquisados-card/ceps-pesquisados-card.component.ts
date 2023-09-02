import { Component, Input, OnInit } from '@angular/core';
import { EnderecoModel } from 'src/app/models/endereco.model';

@Component({
    selector: 'ceps-pesquisados',
    templateUrl: './view/ceps-pesquisados-card.component.html'
})

export class CepsPesquisadosComponent implements OnInit {
    @Input() cepPesquisado!: EnderecoModel;

    constructor() { }

    ngOnInit() { }
}