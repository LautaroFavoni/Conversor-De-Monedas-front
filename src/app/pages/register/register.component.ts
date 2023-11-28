import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  authService = inject(AuthService)
  router = inject(Router)

  registerData : RegisterData = {
    UserName:"",
    Email: "",
    Password:"",
    
    
  }

  register(){
    this.authService.register(this.registerData);
    //this.router.navigate(["/login"])
  }
  }

