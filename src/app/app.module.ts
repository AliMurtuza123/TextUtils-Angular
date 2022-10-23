import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AboutComponent} from './about/about.component'
import {AlertComponent} from './alert/alert.component'
import {NavbarComponent} from './navbar/navbar.component'
import {TextformComponent} from './textform/textform.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: TextformComponent},
  {path: 'about', component: AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AlertComponent,
    NavbarComponent,
    TextformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
