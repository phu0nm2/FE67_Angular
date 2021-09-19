import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  // DOM của angular
  @ViewChild('signupForm') signupForm!: NgForm;

  //
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}

  //
  register() {
    const newUser = { ...this.signupForm.value, maNhom: 'GP01' };
    this._http
      .post(
        'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy',
        newUser,
        {
          headers: {
            TokenCybersoft:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w',
          },
        }
      )
      .subscribe(
        (res) => console.log(res),
        (error) => console.log(error)
      );
  }
  handleSubmit(): void {
    if (this.signupForm.invalid) return;
    this.register();
  }
}
