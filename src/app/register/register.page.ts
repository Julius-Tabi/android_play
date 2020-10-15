import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  showpassword = false;
  passwordToggleIcon = 'eye';
  constructor() { }
  togglePassword() {
    this.showpassword = !this.showpassword;
  }
  ngOnInit() {
  }

}
