import { Component, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from 'src/models/client';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  @Output() 
  clients$: Observable<Client[]> = of([]);

  constructor(
    private clientService: ClientService,
    ) { }

  ngOnInit(): void {
    // this.getClients();
    this.clients$ = this.clientService.getClients();
  }

}
