import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidator{
    static projectNameValidator(control:FormControl):{[s:string]:boolean}{
        if(control.value==='Test'){
          return {
            'InvalidateProjectName':true
          };
        }else{
          return null;
        }
      }
    
      static emailValidator(control:FormControl):Promise<any>|Observable<any>{
        const promise=new Promise<any>((resolve,reject)=>{
          setTimeout(()=>{
            if(control.value==="test@test.com"){
              resolve({
                invalidate:true
              });
            }else{
              resolve(null);
            }
          },2500);
        });
    
        return promise;
      }
}