import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  info:any=''
  childtoParent=''
  register=new FormGroup(
    {
      firstName: new FormControl("",[Validators.required,Validators.maxLength(256), Validators.minLength(3) ]),
      lastName: new FormControl("",[Validators.required,Validators.maxLength(256), Validators.minLength(3) ]),
      age: new FormControl("",[Validators.required,Validators.max(1000)]),
      email: new FormControl("",[Validators.email,Validators.required]),
      mobileNumber: new FormControl("",[Validators.required,Validators.max(10000000000)]),
      userName: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9]+([._]?[.-]?[a-zA-Z0-9]+)*$")]),
      additionalInfo: new FormControl("",Validators.required )
    })

 

  get firstName(){return this.register.get('firstName');}
  get lastName(){return this.register.get('lastName');}
  get age(){return this.register.get('age');}
  get mobileNumber(){return this.register.get('mobileNumber');}
  get email(){return this.register.get('email');}
  get userName(){return this.register.get('userName');}
  get additionalInfo(){return this.register.get('userName');}
  show(){
    console.log(this.register)
  }
  val(event:any)
  {
    this.childtoParent=event;
  }
}
