import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('frm') logForm: NgForm;
  subOptions: string[] = ["Basic", "Advanced", "Pro"];
  defaultSubOption: string = "Advanced";
  submitted:boolean=false;

  userLogin = {
    email: "",
    password: "",
    subscription: ""
  }


  onSubmit() {
    console.log(this.logForm);
    this.submitted=true;
    this.userLogin={
      email: this.logForm.value.userDataGroup.email,
      password: this.logForm.value.userDataGroup.password,
      subscription: this.logForm.value.userDataGroup.subscription
    }
    this.logForm.reset();
  }
}
