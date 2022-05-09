import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Message } from 'src/models/message';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Output() 
  message$: Observable<Message[]> = of([]);
  
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }


  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.message$ = this.messageService.getMessage(id)
  }

  goBack(): void {
    this.location.back();
  }

}
