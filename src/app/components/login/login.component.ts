import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'nerdify';

  showL: boolean = false;
  showR: boolean = false; 
  form: FormGroup;
  usr: user[] = [] as user[];

  constructor(private fb : FormBuilder, private ls : LoginService, private router: Router ){
    this.form = fb.group({
      
        email : ['', Validators.minLength(8)],
        password : ['', Validators.minLength(8)],
      
    });
  }

  login(){


  
    this.ls.getUser().pipe(
      map( (users: user[]) => users.filter(u => u.email === this.form.controls['email'].value) )
    ).subscribe(us => this.usr = us);
    
    
    alert("name: "+this.usr[0].name);
    
    /*
    const myuser: user = this.usr[0];

    localStorage.setItem("username", myuser.name);

    if(myuser.picflag){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/loadpic']);
    }
      */

    // this.ls.getUser().pipe(
    //   map(
    //     u => u.filter(us) => us.email === this.form.controls['email'].value)
    //   )
    // ).subscribe((user: any[]) => console.log(user));
    
    
  }

  showLogin(){
    this.showL=true;
    this.showR=false;
  }

  showRegistration(){
    this.showL=false;
    this.showR=true;
  }

  ngOnInit(): void {
  }

}
