import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private viaCepUrl = 'https://viacep.com.br/ws/';
  private apiCepUrl = 'https://apicep.com/api-de-consulta/';
  private awesomeApiUrl = 'https://docs.awesomeapi.com.br/api-cep/';

  constructor(private http: HttpClient) {}

  buscarCep(cep: string): Observable<any> {
    const viaCepRequest = this.http.get(`${this.viaCepUrl}${cep}/json`);
    const apiCepRequest = this.http.get(`${this.apiCepUrl}${cep}`);
    const awesomeApiRequest = this.http.get(`${this.awesomeApiUrl}${cep}`);

    return forkJoin([
      viaCepRequest.pipe(catchError((error) => of(null))),
      apiCepRequest.pipe(catchError((error) => of(null))),
      awesomeApiRequest.pipe(catchError((error) => of(null))),
    ]).pipe(
      map((responses: any[]) => {        
        for (const response of responses) {
          if (response && !response.hasOwnProperty('erro')) {
            return response;
          }
        }
        throw new Error('Nenhuma fonte de CEP disponível');
      })
    );
  }
}
