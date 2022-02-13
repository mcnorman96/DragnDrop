import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { SubmitComponent } from './submit.component';

import { IntroductionComponent } from './introduction.component';
import { DragdropComponent } from './dragdrop.component';




const routes: Routes = [
  {path: '', component: SubmitComponent},
  {path: 'Submit', component: SubmitComponent},
  {path: 'Intro', component: IntroductionComponent},
  {path: 'Game', component: DragdropComponent}
  
 
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { 

}; 
