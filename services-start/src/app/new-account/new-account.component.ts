import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import {LogService} from '../log.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logService:LogService, private accountService:AccountService){
    this.accountService.statusUpdated.subscribe(
      (status:string)=> alert('New status is '+status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    /*
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    */
   this.accountService.createAccount(accountName,accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
    //const logService=new LogService();
    //logService.changeAccountStatus(accountStatus);
    this.logService.changeAccountStatus(accountStatus);
  }
}
