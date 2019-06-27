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
     fname :new FormControl(''),
     lname :new FormControl(''),
     mobile :new FormControl(''),
     password :new FormControl(''),
     email :new FormControl(''),
     address :new FormControl(''),

   }
 )

 onSubmit()
 {
   console.log(this.formGroup.value);
 }

  constructor() 
  { 
  
  }


  ngOnInit() {
  }

}
