import { Component, OnInit } from '@angular/core';
import { SidebarData } from './sidebarData';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarData =SidebarData;
  constructor() { }

  ngOnInit(): void {
  }

}
