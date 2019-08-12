import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');


  incorrect = false;
  constructor( private router: Router) { }

  ngOnInit() {

  }
onSubmit() {


  if (this.username.value === 'p2753973') {
    if (this.password.value === 'test') {
      this.router.navigate(['/home/joblist']);
    }
  } else {
    this.incorrect = true;
  }
}
}
