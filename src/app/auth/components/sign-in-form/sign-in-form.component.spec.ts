import { SignInFormComponent } from './sign-in-form.component';

describe('SignInFormComponent', () => {
  it('should create', () => {
    const component = new SignInFormComponent();

    expect(component).toBeTruthy();
  });

  it('#submitForm should emit "submit" event', () => {
    const component = new SignInFormComponent();

    component.submit.subscribe(event => expect(event).toBeFalsy());
    component.submitForm();
  });
});
