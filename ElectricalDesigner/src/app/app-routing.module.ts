import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProjectComponent } from './project/new/new.component';
import { ProjectOverviewComponent } from './project/overview/overview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app'},
  { path: 'app', component: ContainerComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
     },
      {
        path: 'project/new',
        component: NewProjectComponent
      },
      {
        path: 'project/:id',
        component: ProjectOverviewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
