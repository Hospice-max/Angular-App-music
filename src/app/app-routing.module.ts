import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo:"/home", pathMatch:'full' },
  { path: 'home',component:HomeComponent},
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: DescriptionComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'next', component: PaginationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
