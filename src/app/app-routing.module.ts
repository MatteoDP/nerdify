import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoadpicComponent } from './components/loadpic/loadpic.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

{path: "home", component: HomeComponent},
{path: "loadpic", component: LoadpicComponent},
{path: "login", component: LoginComponent},
{path: "", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
