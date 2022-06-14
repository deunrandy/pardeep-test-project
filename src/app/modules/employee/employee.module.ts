import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    MainComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
