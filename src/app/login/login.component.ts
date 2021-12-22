import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  ngOnInit(): void {
  }

  constructor(private router: Router){}

  login_method(username:string, password:string):void
  {
    if(username == "admin" && password == "admin"){
      this.router.navigate(['/home']);
    }
    else{
      alert('Invalid credentials');
    }

  }

}
