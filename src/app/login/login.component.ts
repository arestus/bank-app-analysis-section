import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  ngOnInit(): void {
    var name = localStorage.getItem('bankUserName')?.toString()

    if(name == null){
      this.router.navigate(['/']);
    }
    else{
      this.router.navigate(['/home']);
    }

  }

  constructor(private router: Router, private obj: LoginService){}

  login_method(username:string, password:string):void
  {
   
    this.obj.loginMethod(username, password).subscribe(data=>
      {

        // console.log(data)

        if(data.toString() != "nota"){
          //save to local storage
          localStorage.setItem('bankUserName', data.toString());

          this.router.navigate(['/file-upload']);

        }
        else{
          alert('Invalid credentials');
        }

      })

  }

}
