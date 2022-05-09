import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  data: Observable<any> = of();
  // data: any[] = [];
  @Input()
  path: string = "";
  list: any;
  keys: string[] = [];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.data.subscribe(list => {
      this.list = list;
      console.log(list)
      console.log(Object.keys(list[0]))
      if (list.length > 0) {
        this.keys = Object.keys(list[0]);
      }
    })
    ;
  }

  goBack(): void {
    this.location.back();
  }

}
