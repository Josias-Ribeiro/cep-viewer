import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActivatedRouteStub {
  private paramMapSubject = new BehaviorSubject(new Map<string, string>());
  paramMap = this.paramMapSubject.asObservable();
  setParamMap(params: Map<string, string>) {
    this.paramMapSubject.next(params);
  }
}
