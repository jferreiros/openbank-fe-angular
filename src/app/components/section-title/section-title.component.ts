import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  @Input() title?: string;
  @Input() button?: string;
  @Input() buttonPath?: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  new() {
    this.router.navigate([this.buttonPath])
  }

}
