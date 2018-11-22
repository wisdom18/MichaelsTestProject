import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  
 import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { UserService } from './shared/user.service';
import { AppRoutingModule } from './/app-routing.module';
 





 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


 

 
