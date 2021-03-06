import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button-send',
  templateUrl: './button-send.component.html',
  styleUrls: ['./button-send.component.scss']
})
export class ButtonSendComponent implements OnInit {

  @Input() text: string = "";
  @Output() onPressMyButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onPressMyButton.emit();
  }

}
