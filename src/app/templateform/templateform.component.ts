import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {

  skills = ['Angular', 'Node','JAVA', 'Salesforce', 'Oracle/SQL'];


  constructor() { }

  ngOnInit() {
  }

  onSubmit(value : FormsModule)
  {
    console.log(value,"Data from the form using the (ngSubmit) event property");
  }
  

}
