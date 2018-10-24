import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  @Output()
  submit = new EventEmitter<void>();

  submitForm(): void {
    this.submit.emit();
  }
}
