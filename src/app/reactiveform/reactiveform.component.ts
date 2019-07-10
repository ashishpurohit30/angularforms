import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

 formGroup = new FormGroup(
   {
     fname :new FormControl('',Validators.compose([Validators.minLength(4), Validators.maxLength(16), Validators.required])),
     lname :new FormControl('',Validators.compose([Validators.minLength(4), Validators.maxLength(16)])),
     mobile :new FormControl(''),
     password :new FormControl(''),
     email :new FormControl(''),
     address :new FormControl(''),

   }
 )

 onSubmit()
 {
   console.log(this.formGroup);
 }

 resetForm()
 {
   this.formGroup.reset();
 }

  constructor() 
  { 
  
  }


  ngOnInit() {
  }

}
