import { Component, OnInit } from '@angular/core';

import { FormControl , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
formGroup = new FormGroup(
  {
  fullname :new FormControl('' , Validators.required),
  lastname :new FormControl('' , Validators.compose([Validators.minLength(6), Validators.maxLength(16)])),
  mobile :new FormControl(''),
  password :new FormControl(''),
  email :new FormControl(''),
  address :new FormControl(''),
    }
  );

  onSubmit()
  {
    console.log(this.formGroup.value);
  }

  resetForm()
  {
    this.formGroup.reset();
  }

  constructor() { }
  ngOnInit() { }

//  onSubmit()
//  {
//    console.log(this.formGroup);
//  }

//  resetForm()
//  {
//    this.formGroup.reset();
//  }

 

 }
