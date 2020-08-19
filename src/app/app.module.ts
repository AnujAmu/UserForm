import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserDataFormModule } from './user-form/modules/user-data-form/user-data-form.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserDataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
