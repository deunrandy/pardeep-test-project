import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/shared/constants/utils.constant';
import { CreateComponent } from './create/create.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: ROUTES.EMPLOYEES.CREATE,
    component: CreateComponent
  },
  // {
  //   path: ROUTES.COMMUNITY.VIEW,
  //   component: ViewComponent
  // },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EmployeeRoutingModule { }
