import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-bos',
  templateUrl: './log-in-bos.component.html',
  styleUrls: ['./log-in-bos.component.scss']
})
export class LogInBosComponent {
  myForm: any;


  constructor(private fb: FormBuilder) {}


  ngOnInit() {

    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    password:['', [Validators.required, Validators.minLength(6)]],
    });
   
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
    console.log('password', form.value.password);
  }

 
}
