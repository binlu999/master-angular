import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  activated:boolean=false;
  subscribtion:Subscription;
  constructor(private userService:UserService) {}

  ngOnInit() {
    this.subscribtion=this.userService.activatedEmitter.subscribe(activated=>{
      this.activated=activated;
    });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
