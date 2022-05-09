import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LOANS } from 'src/mocks/mocks-loans';
import { Loan } from 'src/models/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

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
