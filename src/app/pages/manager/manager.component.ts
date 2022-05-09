import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Manager } from 'src/models/manager';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  @Output() 
  manager$: Observable<Manager[]> = of([]);

  constructor(
    private managerService: ManagerService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }


  ngOnInit(): void {
    this.getManager();
  }

  getManager(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.manager$ = this.managerService.getManager(id)
  }

  goBack(): void {
    this.location.back();
  }

}
