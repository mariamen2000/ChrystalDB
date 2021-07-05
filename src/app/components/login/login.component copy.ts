import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private spinnerSvc: SpinnerService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  get getControl() {
    return this.form.controls;
  }

  log() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    if (email == "a@a.com" && password == "12345678") {
      //login
      this.fakeloading();
    } else {
      //error
      this.error();
      this.form.reset;
    }
  }

  error() {
    this._snackBar.open("Wrong Email or Password", "", {
      duration: 1500,
    })
  }



  fakeloading() {
    this.spinnerSvc.show();
    setTimeout(() => {
      //redireccionar
      this.spinnerSvc.hide();
    }, 1500);
  }
}

