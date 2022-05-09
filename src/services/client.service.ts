import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CLIENTS } from 'src/mocks/mocks-clients';
import { Client } from 'src/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClient(id:number): Observable<Client[]> {
    const client = CLIENTS.find(client => client.id == id)!;
    return of([client]);
  };

  getClients(): Observable<Client[]> {
    const clients = of(CLIENTS);
    return clients;
  };
  // updateClient(id:number): void {};

  deleteClient(id:number): any {
    var client = CLIENTS.filter(client => client.id !== id)
    return client;
  };



  // insertClient(Client): void {};
  // insertClients(Client[]): void {};



}
