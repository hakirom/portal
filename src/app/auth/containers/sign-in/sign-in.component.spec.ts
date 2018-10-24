import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SignInComponent,
        { provide: Location, useClass: MockLocation }
      ]
    });
  });

  it('should create', () => {
    const component = TestBed.get(SignInComponent);

    expect(component).toBeTruthy();
  });

  it('#singIn should go to "apps"', () => {
    const component = TestBed.get(SignInComponent);
    const location = TestBed.get(Location);

    expect(location.path).toBe('auth/sign-in');
    component.signIn();
    expect(location.path).toBe('apps');
  });
});

class MockLocation {
  path = 'auth/sign-in';

  go(path: string): void {
    this.path = path;
  }
}
