import { Component, OnInit } from '@angular/core';
import {MessageData} from './messageData';
interface Message {
  type: string;
  message: string;
}

@Component({
  selector: 'app-message-setting',
  templateUrl: './message-setting.component.html',
  styleUrls: ['./message-setting.component.css']
})
export class MessageSettingComponent implements OnInit {
  messageData: Message[]= MessageData;

  constructor() { }

  ngOnInit(): void {
  }

}
