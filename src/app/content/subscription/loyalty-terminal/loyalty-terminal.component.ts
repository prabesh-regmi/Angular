import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-loyalty-terminal',
  templateUrl: './loyalty-terminal.component.html',
  styleUrls: ['./loyalty-terminal.component.css']
})
export class LoyaltyTerminalComponent implements OnInit {

  // @Input() innerHTML!:string; 
  // @Output() innerHTMLChange = new EventEmitter<string>();
  // demoText="demo";
  // actualText="actual";
  // constructor() { }
  // save(a:any){
  //   console.log("here:"+a)
  //   this.innerHTML=a;
  // }
  fontSizePx = 16;

  @Input()  size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
  ngOnInit(): void {
  }

}
