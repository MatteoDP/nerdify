import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoadpicComponent } from './components/loadpic/loadpic.component';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AlphabetComponent } from './components/alphabet/alphabet.component'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MyInterceptorService } from './services/myinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadpicComponent,
    LoginComponent,
    AlphabetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
