import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{"name":string,"content":string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{"name":string,"content":string}>();

  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  
  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.newServerContent
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.newServerContent
    });
  }
}
