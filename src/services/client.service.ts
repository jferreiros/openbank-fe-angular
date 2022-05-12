import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CLIENTS } from 'src/mocks/mocks-clients';
import { Client } from 'src/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientUrl = 'http://localhost:8080/clients';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    ) { }

  getClient(id:number): Observable<Client[]> {
    const client = CLIENTS.find(client => client.id == id)!;
    return of([client]);
  };

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl)
    // const clients = of(CLIENTS);
    // return clients;
  };

  
  // updateClient(id:number): void {};

  deleteClient(id:number): any {
    var client = CLIENTS.filter(client => client.id !== id)
    return client;
  };



  // insertClient(Client): void {};
  // insertClients(Client[]): void {};



}
