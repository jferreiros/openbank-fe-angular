import { Component, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wire } from 'src/models/wire';
import { WireService } from 'src/services/transfer.service';

@Component({
  selector: 'app-wires',
  templateUrl: './wires.component.html',
  styleUrls: ['./wires.component.scss']
})
export class WiresComponent implements OnInit {

  @Output() 
  wires$: Observable<Wire[]> = of([]);

  constructor(
    private wireService: WireService,

  ) { }

  ngOnInit(): void {
    this.wires$ = this.wireService.getWires();
  }

}
