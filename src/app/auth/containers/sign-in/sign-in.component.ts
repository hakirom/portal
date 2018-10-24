import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private location: Location) {}

  signIn(): void {
    this.location.go('apps');
  }
}
