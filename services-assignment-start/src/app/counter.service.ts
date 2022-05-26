import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CounterService{
    private activeToInactiveCounter:number=0;
    private inactiveToActiveCounter:number=0;

    increaseActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log('activeToInactiveCounter is '+this.activeToInactiveCounter);
    }
    increaseInactiveToActive(){
        this.inactiveToActiveCounter++;
        console.log('inactiveToActiveCounter is '+this.inactiveToActiveCounter);
    }
}