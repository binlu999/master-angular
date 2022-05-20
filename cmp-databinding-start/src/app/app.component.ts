import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{"type":"server","name":"Test server","content":"This is a test server"}];

  onServerCreated(eventData:{"name":string,"content":string}) {
    this.serverElements.push({
      type: 'server',
      name: eventData.name,
      content: eventData.content
    });
  }

  onBlueprintCreated(eventData:{"name":string,"content":string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.name,
      content: eventData.content
    });
  }

}
