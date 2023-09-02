import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CepService } from 'src/app/services/http/pesquisa-cep.service';
import { of, throwError } from 'rxjs';
import { EnderecoModel } from 'src/app/models/endereco.model';
import { AuthService } from 'src/app/services/auth.service';
import { MaterialCoreModule } from 'src/app/shared/modules/material.core.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let cepService: jasmine.SpyObj<CepService>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    cepService = jasmine.createSpyObj('CepService', ['buscarCep']);
    authService = jasmine.createSpyObj('AuthService', ['logout']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: CepService, useValue: cepService },
      ],
      imports: [HttpClientTestingModule, MaterialCoreModule],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
    expect(component.endereco).toBeUndefined();
    expect(component.cepControl).toBeDefined();
    expect(component.pesquisando).toBeFalse();
  });

  it('should call buscarCep and update endereco on successful search', () => {
    const mockEndereco: EnderecoModel = {
      cep: '12345678',
      logradouro: 'Rua Exemplo',
      complemento: 'Complemento Exemplo',
      bairro: 'Bairro Exemplo',
      localidade: 'Cidade Exemplo',
      uf: 'UF',
      ibge: '1234567',
      gia: 'GIA',
      ddd: '99',
      siafi: '9876',
    };

    cepService.buscarCep.and.returnValue(of(mockEndereco));

    component.cepControl.setValue('12345678');
    component.pesquisarCep();

    expect(cepService.buscarCep).toHaveBeenCalledWith('12345678');
    expect(component.endereco).toEqual(mockEndereco);
    expect(component.pesquisando).toBe(false);
  });  
  
});
