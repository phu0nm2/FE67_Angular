import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthDataService } from 'src/app/services/auth-data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @ViewChild('signinForm') signinForm!: NgForm;
  constructor(
    private _http: HttpClient,
    private _authService: AuthDataService
  ) {}

  handleSubmitLogin() {
    const userLogin = this.signinForm.value;
    this._http
      .post(
        'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
        userLogin,
        {
          headers: {
            TokenCybersoft:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w',
          },
        }
      )
      .subscribe(
        (res: any) => {
          this._authService.setMe(res.content);
          localStorage.setItem('t', res.content.accessToken);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

  ngOnInit(): void {}
}
