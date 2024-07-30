import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserChannelComponent } from './pages/user-channel/user-channel.component';
import { MainComponent } from './pages/main/main.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UploadContentComponent } from './components/upload-content/upload-content.component';
import { HeadderComponent } from './components/headder/headder.component';
import { FooterComponent } from './components/footer/footer.component';


/* ANGULAR MATERIAL MODULES */

/* PRIMENG MODULES */



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    UserChannelComponent,
    MainComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    UploadContentComponent,
    HeadderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

    /* ANGULAR MATERIAL MODULES */

    /* PRIMENG MODULES */

    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
