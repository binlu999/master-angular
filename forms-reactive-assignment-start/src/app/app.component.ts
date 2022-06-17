import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidator } from './customValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm:FormGroup;
  defaultStatusOption:string='Stable';
  statusOptions:string[]=['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.projectForm=new FormGroup({
      'projectData':new FormGroup({
        'projectname':new FormControl(null,[Validators.required,CustomValidator.projectNameValidator]),
        'email':new FormControl(null,[Validators.required,Validators.email],CustomValidator.emailValidator),
        'status':new FormControl('Critical')
      })
    })
  }

  onSubmit(){
    console.log('On submit event');
    console.log(this.projectForm);
    console.log('On submit project value');
    console.log(this.projectForm.value);

  }
}
