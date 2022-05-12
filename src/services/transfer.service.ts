import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WIRES } from 'src/mocks/mocks-wires';
import { Wire } from 'src/models/wire';

@Injectable({
  providedIn: 'root'
})
export class WireService {

  private wireUrl = 'http://localhost:8080/wires';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getWire(id:number): Observable<Wire[]> {
    var loan = WIRES.find(loan => loan.id == id)!;
    // const answer = loan[0];
    return of([loan]);
  };
  getWires(): Observable<Wire[]> {
    const loans = of(WIRES);
    return loans;
  };
  // updateClient(id:number): void {};

  deleteWires(id:number): any {
    var loan = WIRES.filter(loan => loan.id !== id)
    return loan;
  };

}