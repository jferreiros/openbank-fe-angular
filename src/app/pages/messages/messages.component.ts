import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Message } from 'src/models/message';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @Output() 
  messages$: Observable<Message[]> = of([]);

  constructor(
    private messageService: MessageService,

  ) { }

  ngOnInit(): void {
    this.messages$ = this.messageService.getMessages();
  }

}
