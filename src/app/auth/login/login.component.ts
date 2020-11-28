import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { LoginPayload } from '../login-payload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loginPayload:LoginPayload;


  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) { 
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      
      password:['',[Validators.required]]  
    })

    this.loginPayload = {
      email:'',
      password:'',
      type_c:''
    }

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginPayload.email = this.loginForm.get('email').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    this.loginPayload.type_c = this.loginForm.get("typeu").value;
    this.loginPayload.type_c = this.loginForm.get("typeu").value; 
    console.log(this.loginPayload);


    this.authService.login(this.loginPayload).subscribe(data => {
      console.log(data);
      console.log("welcome");
      this.router.navigateByUrl("/home");

    
    } , error =>{
      alert('Unsuccessfull');
    });
  }

}
