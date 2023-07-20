import { Component,OnInit} from '@angular/core';
import { AppService } from '../Services/app.service';
/* import { FormBuilder, FormGroup } from '@angular/forms'; */

@Component({
  selector: 'app-eld',
  templateUrl: './eld.component.html',
  styleUrls: ['./eld.component.css']
})
export class EldComponent  {
title = 'cris';

/* frmRegister: FormGroup;*/ 
formData: any={};
constructor( private _appservice: AppService) {}  
/* ngOnInit(): void {  
    this.frmRegister = this._fb.group({  
        regFullName: "",  
        regEmail: "",

    });   
 }  */ 

/* /SaveEmployee() {  
  if(this.frmRegister.valid){
     this._appservice.frmRegister.addedlist(this._appservice.frmRegister.value).subscribe({
         next: (val:any)=> {
          alert("data added sucessfully"); 
      },
      error:(err:any)=>{
      console.error(err);
      }
    });
  console.log(this._appservice.frmRegister.value);
   } 
} 
 */

saveEmployee(data:any){
  console.log("call");
  this._appservice.submitFormData(data).subscribe(
    (response)=>{
    console.log("Form submitted:",response);
    }
    ,
(error)=> {
  console.log("error form:",error);
}
  );
}
}

