import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MANAGERS } from 'src/mocks/mocks-managers';
import { Manager } from 'src/models/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }

  getManager(id:number): Observable<Manager[]> {
    var manager = MANAGERS.find(manager => manager.id == id)!;
    // const answer = manager[0];
    return of([manager]);
  };
  getManagers(): Observable<Manager[]> {
    const managers = of(MANAGERS);
    return managers;
  };
  // updateClient(id:number): void {};

  deleteManager(id:number): any {
    var manager = MANAGERS.filter(manager => manager.id !== id)
    return manager;
  };

}