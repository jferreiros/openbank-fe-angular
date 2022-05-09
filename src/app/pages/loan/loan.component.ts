import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Loan } from 'src/models/loan';
import { LoanService } from 'src/services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  @Output() 
  loan$: Observable<Loan[]> = of([]);

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getLoan();
  }

  getLoan(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loan$ = this.loanService.getLoan(id)
  }

  goBack(): void {
    this.location.back();
  }

}
