import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Manager } from 'src/models/manager';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit {

  @Output() 
  managers$: Observable<Manager[]> = of([]);

  constructor(
    private managerService: ManagerService,

  ) { }

  ngOnInit(): void {
    this.managers$ = this.managerService.getManagers();
  }

}
