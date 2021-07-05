import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private spinnerSvc: SpinnerService, private _auth: AuthService) {
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
        res => console.log(res),
        err => console.log(err)
      )
    this.form.reset;
  }

  error() {
    this._snackBar.open("Wrong Email or Password", "", {
      duration: 1500,
    })
  }

}
