import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Wire } from 'src/models/wire';
import { WireService } from 'src/services/transfer.service';

@Component({
  selector: 'app-wire',
  templateUrl: './wire.component.html',
  styleUrls: ['./wire.component.scss']
})
export class WireComponent implements OnInit {

  @Output() 
  wire$: Observable<Wire[]> = of([]);

  constructor(
    private wireService: WireService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }


  ngOnInit(): void {
    this.getWire();
  }

  getWire(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.wire$ = this.wireService.getWire(id)
  }

  goBack(): void {
    this.location.back();
  }

}
