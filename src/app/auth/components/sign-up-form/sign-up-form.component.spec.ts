import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
  it('should create', () => {
    const component = new SignUpFormComponent();

    expect(component).toBeTruthy();
  });

  it('#submitForm should emit "submit" event', () => {
    const component = new SignUpFormComponent();

    component.submit.subscribe(event => expect(event).toBeFalsy());
    component.submitForm();
  });
});
