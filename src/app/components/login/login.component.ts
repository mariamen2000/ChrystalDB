import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private _auth: AuthService) {
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

  loginUser() {

    this._auth.loginUser(this.form.value)
      .subscribe(
        res => this.success(),
        err => this.error()
      )

  }

  success() {
    this._snackBar.open("Usuario entro", "", {
      duration: 1500,
    })
  }

  error() {
    this._snackBar.open("Correo o Contraseña incorrecta", "", {
      duration: 1500,
    })
    this.form.reset();
  }

}

