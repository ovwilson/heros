import { NgModule }       from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule }   from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { APPRROUTES } from "./dashboard.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(APPRROUTES)
  ],
  declarations :[
    DashboardComponent
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule {}