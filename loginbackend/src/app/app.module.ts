import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInBosComponent } from './log-in-bos/log-in-bos.component';
import { Login2Component } from './login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInBosComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}