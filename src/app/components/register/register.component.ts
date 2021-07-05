import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private _auth: AuthService) {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.minLength(8)]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  get getControl() {
    return this.form.controls;
  }

  register() {
    this._auth.registerUser(this.form.value)
      .subscribe(
        res => this.success(),
        err => this.error()
      )
    this.form.reset();
  }

  success() {
    this._snackBar.open("Usuario registrado", "", {
      duration: 1500,
    })
  }

  error() {
    this._snackBar.open("Error registrando usuario", "", {
      duration: 1500,
    })
    this.form.reset();
  }

}
