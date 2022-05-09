import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MESSAGES } from 'src/mocks/mocks-messages';
import { Message } from 'src/models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessage(id:number): Observable<Message[]> {
    var message = MESSAGES.find(message => message.id == id)!;
    // const answer = message[0];
    return of([message]);
  };
  getMessages(): Observable<Message[]> {
    const messages = of(MESSAGES);
    return messages;
  };
  // updateClient(id:number): void {};

  deleteMessage(id:number): any {
    var message = MESSAGES.filter(message => message.id !== id)
    return message;
  };

}