import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registerForm !:FormGroup
  pattran : string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.pattern] ],
      userName:['',],
      password:[null,],
      confirmPassword:[null,],
    })
  }

  
  submitForm() {
   console.log(this.registerForm);
  }
  get registerFormControls(){
    return this.registerForm.controls;
  }

}
