import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = {
    idUsuario: 0,
    email: "",
    username: "",
    senha: ""
  }

  username = ''
  password = ''
  invalidLogin = false
  msg="";
  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registro(): void {
    this.authenticationService.create(this.user).subscribe(
       data => {
        this.router.navigate(['/login']);
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true;
        this.msg="Bad CREDENTIALS";

      }
    )
  }

  cancel(): void {
    this.router.navigate(['/login']);
  }

}
