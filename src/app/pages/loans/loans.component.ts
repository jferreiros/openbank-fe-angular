import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Loan } from 'src/models/loan';
import { LoanService } from 'src/services/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  @Output() 
  loans$: Observable<Loan[]> = of([]);

  constructor(
    private loanService: LoanService,
  ) { }

  ngOnInit(): void {
    this.loans$ = this.loanService.getLoans();
  }

}
