import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepHistoryStateService {
  private cepHistorySubject = new BehaviorSubject<string[]>([]);
  cepHistory$ = this.cepHistorySubject.asObservable();

  constructor() {}

  adicionarCepAoHistorico(cep: string) {
    const historicoAtual = this.cepHistorySubject.value;
    historicoAtual.push(cep);
    this.cepHistorySubject.next(historicoAtual);
  }
}
