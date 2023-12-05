import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { CoheroComponent } from './cohero/cohero.component';
import { HelpsComponent } from './helps/helps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    CoheroComponent,
    HelpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
