import { CoreModule } from './Modules/core/core.module';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './Modules/routing/routing.module';
import { MoviesModule } from './Modules/movies/movies.module';
import { DetailModule } from './Modules/detail/detail.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Modules/home/home.module';
import { AuthModule } from './Modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DetailModule,
    AuthModule,
    MoviesModule,
    //
    RoutingModule,
    RouterModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
