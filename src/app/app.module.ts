import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { DragdropComponent } from './dragdrop.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction.component';
import { SubmitComponent } from './submit.component';

var firebaseConfig = {
  apiKey: "AIzaSyDK01ochZfoj98MJikufJmwu8G7TShG1Uc",
  authDomain: "angular-exam-3508e.firebaseapp.com",
  databaseURL: "https://angular-exam-3508e.firebaseio.com",
  projectId: "angular-exam-3508e",
  storageBucket: "angular-exam-3508e.appspot.com",
  messagingSenderId: "601339168041",
  appId: "1:601339168041:web:8f8821461800871b242338"
};

@NgModule({
  declarations: [
    DragdropComponent, AppComponent, IntroductionComponent, SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgDragDropModule.forRoot(), DragDropModule, 
    AngularFireModule.initializeApp(firebaseConfig),  AngularFirestoreModule, FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
