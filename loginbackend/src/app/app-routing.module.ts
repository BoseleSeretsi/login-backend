import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInBosComponent } from './log-in-bos/log-in-bos.component';


const routes: Routes = [
  {
    path : " ", component : LogInBosComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
