import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LOANS } from 'src/mocks/mocks-loans';
import { Loan } from 'src/models/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private loantUrl = 'http://localhost:8080/loans';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    ) { }

  getLoan(id:number): Observable<Loan[]> {
    var loan = LOANS.find(loan => loan.id == id)!;
    // const answer = loan[0];
    return of([loan]);
  };
  getLoans(): Observable<Loan[]> {
    const loans = of(LOANS);
    return loans;
  };
  // updateClient(id:number): void {};

  deleteLoan(id:number): any {
    var loan = LOANS.filter(loan => loan.id !== id)
    return loan;
  };

}
