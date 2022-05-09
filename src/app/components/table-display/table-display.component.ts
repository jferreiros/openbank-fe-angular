import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Client } from 'src/models/client';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent implements OnInit {

  @Input() clients?: Client[];
  @Input()
  data: Observable<any[]> = of([]);
  // data: any[] = [];
  @Input()
  path: string = "";
  list: any[] = [];
  keys: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.data.map(list => {
    //     this.list = list;
    //     if (list.length > 0) {
    //       this.keys = Object.keys(list[0]);
    //     }
    //   });
    this.data.subscribe(list => {
      this.list = list;
      if (list.length > 0) {
        this.keys = Object.keys(list[0]);
      }
    });
  }

  newClient() {
    this.router.navigate([`/${this.path}/create`]);
  };

  modify(id: number) {
    this.router.navigate([`/${this.path}/${id}`]);
  }

  delete(row: any): void {
    this.list.forEach((item, index) => {
      if(item.id === row.id) { 
      var i = index;
      this.list.splice(i, 1)
      }
    });

  }

  // delete(client : Client): void {
  //   this.client = undefined;
  //   this.clientService.deleteClient(client.id).subscribe();
  // }

}
