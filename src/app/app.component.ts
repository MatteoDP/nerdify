import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { user } from './user';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nerdify';

  showL: boolean = false;
  showR: boolean = false; 
  form: FormGroup;
  usr: user | undefined;

  constructor(private fb : FormBuilder, private ls : LoginService ){
    this.form = fb.group({
      
        email : ['', Validators.required],
        password : ['', Validators.required],
      
    });
  }

  login(){
    
    this.usr=this.ls.getUser().pipe(
      map((u) => (u.filter((us) => us.email === this.form.controls['email']))
    ).subscribe();

    
  }

  showLogin(){
    this.showL=true;
    this.showR=false;
  }

  showRegistration(){
    this.showL=false;
    this.showR=true;
  }
}
