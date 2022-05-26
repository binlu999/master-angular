import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LogService{
    changeAccountStatus(status:string){
        console.log("Account status changed "+status);
    }
}