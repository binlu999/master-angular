import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signuForm: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = "No answer yet";
  genders: string[] = ['male', 'female'];

  submitted:boolean=false;
  userData = {
    "email": "",
    "gender": "",
    "questionAnswer": "",
    "secret": "",
    "username": ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*
    this.signuForm.setValue(
      {
        userdatagroup: {
          email: "binlu@ww.com",
          gender: "male",
          questionAnswer: "new anser",
          secret: "pet",
          username: suggestedName
        }
      }
    )
    */
    this.signuForm.form.patchValue({
      userdatagroup: {
        username: suggestedName
      }
    })
  }

  // // onSubmit(form:NgForm){
  // //   console.log(form);
  // // }

  onSubmit() {
    console.log(this.signuForm);
    this.submitted=true;
    this.userData={
      "email": this.signuForm.value.userdatagroup.email,
      "gender": this.signuForm.value.userdatagroup.gender,
      "questionAnswer": this.signuForm.value.userdatagroup.questionAnswer,
      "secret": this.signuForm.value.userdatagroup.secret,
      "username":this.signuForm.value.userdatagroup.username 
    }
    this.signuForm.reset();
  }
}
