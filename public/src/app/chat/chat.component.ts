import { ApiService } from './../services/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    this.connection = this._api.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }
  sendMessage() {
    this._api.sendMessage(this.message);
    this.message = '';
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
