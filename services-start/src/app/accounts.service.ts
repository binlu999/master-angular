import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
    providedIn:'root'
})
export class AccountService {
    statusUpdated=new EventEmitter<string>();
    
    accounts = [

      ];
    
      constructor(private logService:LogService){

      }
      createAccount(name:string,status:string){
          this.accounts.push({
              name:name,
              status:status
          });
          this.logService.changeAccountStatus(status);
      }

      updateAccount(id:number,status:string){
          this.accounts[id].status=status;
          this.logService.changeAccountStatus(status);
      }
}