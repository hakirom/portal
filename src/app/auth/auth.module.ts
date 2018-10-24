import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignInComponent } from './containers/sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgZorroAntdModule,
    TranslateModule.forChild(),
    FormsModule
  ],
  declarations: [AuthComponent, SignInComponent, SignInFormComponent]
})
export class AuthModule {}
