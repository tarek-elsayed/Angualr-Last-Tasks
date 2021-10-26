import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  emailRequire !: boolean 
  passRequire !: boolean 
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  submitForm(form:any){
    this.emailRequire = form.form.controls.emailAddress.errors.required;
    this.passRequire = form.form.controls.password.errors.required;
  }

  reigester(){
   this.router.navigate([`login/redirect`]) 
  }
}
