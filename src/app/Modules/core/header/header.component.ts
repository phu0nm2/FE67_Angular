import { Component, OnInit } from '@angular/core';
import { AuthDataService } from 'src/app/services/auth-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private _authService: AuthDataService) {}

  me: any;

  ngOnInit(): void {
    this._authService.me.subscribe((value) => {
      this.me = value;
    });
  }
}
