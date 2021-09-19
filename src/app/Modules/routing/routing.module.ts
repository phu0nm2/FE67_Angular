import { MovieNewComponent } from './../movies/movie-new/movie-new.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from '../home/home-index/home-index.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { DetailIndexComponent } from '../detail/detail-index/detail-index.component';

const routes: Routes = [
  { path: 'detail/:id', component: DetailIndexComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'movie/new', component: MovieNewComponent },
  { path: '', component: HomeIndexComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class RoutingModule {}
