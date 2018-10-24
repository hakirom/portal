import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: TranslateService, useClass: MockTranslateService }
      ]
    });
  });

  it('should create', () => {
    const component = TestBed.get(AppComponent);
    expect(component).toBeTruthy();
  });

  it('should set "es" to TranslateService', () => {
    TestBed.get(AppComponent);
    const translateService = TestBed.get(TranslateService);

    expect(translateService.lang).toBe('es');
  });
});

class MockTranslateService {
  lang: string;

  use(lang: string) {
    this.lang = lang;
  }
}
