import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired=new EventEmitter<number>();
  interval;
  lastValue=0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval=setInterval(()=>{
      this.lastValue++;
      this.intervalFired.emit(this.lastValue);
      console.log("Emitted "+this.lastValue);
    },1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }
}
