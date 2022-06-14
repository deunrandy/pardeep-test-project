import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './modules/employee/employee.component';
import { ProjectComponent } from './modules/project/project.component';
import { ROUTES } from './shared/constants/utils.constant';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.PROJECT.MAIN
  },
  {
    path: ROUTES.PROJECT.MAIN,
    component: ProjectComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/project/project.module").then(
            (m) => m.ProjectModule
          ),
      },
    ],
  },
  {
    path: ROUTES.EMPLOYEES.MAIN,
    component: EmployeeComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/employee/employee.module").then(
            (m) => m.EmployeeModule
          ),
      },
    ],
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
