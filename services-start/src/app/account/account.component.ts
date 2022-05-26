import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logService:LogService, private accountService:AccountService){

  }
  onSetTo(status: string) {
    this.accountService.updateAccount(this.id,status);
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
    //this.logService.changeAccountStatus(status);
    this.accountService.statusUpdated.emit(status);
  }
}
