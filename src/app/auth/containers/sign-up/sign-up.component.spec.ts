import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SignUpComponent,
        { provide: Location, useClass: MockLocation }
      ]
    });
  });

  it('should create', () => {
    const component = TestBed.get(SignUpComponent);

    expect(component).toBeTruthy();
  });

  it('#signUp should go to "apps"', () => {
    const component = TestBed.get(SignUpComponent);
    const location = TestBed.get(Location);

    expect(location.path).toBe('auth/sign-up');
    component.signUp();
    expect(location.path).toBe('apps');
  });
});

class MockLocation {
  path = 'auth/sign-up';

  go(path: string): void {
    this.path = path;
  }
}
