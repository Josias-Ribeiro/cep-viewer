import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CepService } from 'src/app/services/http/pesquisa-cep.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let cepService: jasmine.SpyObj<CepService>;

  beforeEach(() => {
    cepService = jasmine.createSpyObj('CepService', ['buscarCep']);
    
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: CepService, useValue: cepService }
        // Add other providers if needed
      ],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should call buscarCep and update endereco on successful search', () => {
    const mockEndereco = { cep: '12345-678', // Add other properties as needed };
    
    cepService.buscarCep.and.returnValue(of(mockEndereco));

    component.cepControl.setValue('12345-678');
    component.pesquisarCep();

    expect(cepService.buscarCep).toHaveBeenCalledWith('12345-678');
    expect(component.endereco).toEqual(mockEndereco);
    expect(component.pesquisando).toBe(false);
  });
});
