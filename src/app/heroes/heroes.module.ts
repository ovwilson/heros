import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { APPRROUTES } from "./heroes.routing";

@NgModule({
  imports: [
    RouterModule.forChild(APPRROUTES)
  ],
  declarations :[
    HeroesComponent
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesModule {}