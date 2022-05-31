import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alert, AlertPromise } from 'selenium-webdriver';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;
  changeSaved=false;

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
   
    this.route.queryParams.subscribe(
      (queryParams:Params)=>{
        this.allowEdit = queryParams['allowEdit']==='1'?true:false;
      }
    );
    this.route.fragment.subscribe();
    const id=+this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params:Params)=>{
        const id=+params['id'];
        this.server=this.serversService.getServer(id);
        this.serverName=this.server.name;
        this.serverStatus=this.server.status;
      }
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved=true;
    this.router.navigate(['/'],{relativeTo:this.route})
  }

  canDeactivate(): Observable<boolean>|Promise<boolean>| boolean {
    console.log("Deactive")
    if(!this.allowEdit){
      console.log("Deactive no")
      return true;
    }
    if((this.serverName!==this.server.name || this.serverStatus!==this.server.status)&&!this.changeSaved){
      console.log("Deactive yes")
      return confirm('Do you want to discard the changes?');
    }else{
      console.log("Deactive no?")
      return true;
    }
  }

}
