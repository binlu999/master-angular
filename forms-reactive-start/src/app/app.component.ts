import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm:FormGroup;
  forbiddenUserNames:string[]=['binlu','yinghui'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'username': new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
      }),
      'gender':new FormControl('male'),
      'hobbies': new FormArray([])
    });

    /*
    this.signupForm.valueChanges.subscribe(
      (value)=>{
        console.log(value);
      }
    );
    */
   this.signupForm.statusChanges.subscribe((status)=>{
    console.log(status);
   });

   
   this.signupForm.setValue(
    {
      'userData':{
        'username':'Max',
        'email':'tt@jj.com'
      },
      'gender':'female',
      'hobbies': []
    }
   );
    
   this.signupForm.patchValue(
    {
      'userData':{
        'username':'binlu'
      }
    }
   );
  }

  onSubmit(){
    console.log("On submit event");
    console.log(this.signupForm);
    //this.signupForm.reset();
    this.signupForm.reset(
      {
        'gender':'female'
      }
    );
  }

  onAddHobby(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control:FormControl):{[s:string]:boolean} {
    if(this.forbiddenUserNames.indexOf(control.value)!==-1){
      return {'nameIsForbidden':true};
    }
    return null;
  }

  forbiddenEmails(control:FormControl):Promise<any>|Observable<any>{
    const promise=new Promise<any>((resole,reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resole({'emailIsForbidden':true})
        }else{
          resole(null);
        }
      },2500)
    })
    return promise;
  }
}
