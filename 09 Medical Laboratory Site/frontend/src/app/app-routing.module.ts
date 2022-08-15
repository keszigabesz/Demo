import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { PatientEditComponent } from './page/patient-edit/patient-edit.component';
import { PatientComponent } from './page/patient/patient.component';
import { PhysicianEditComponent } from './page/physician-edit/physician-edit.component';
import { PhysicianComponent } from './page/physician/physician.component';
import { ReagentEditComponent } from './page/reagent-edit/reagent-edit.component';
import { ReagentComponent } from './page/reagent/reagent.component';
import { SampleEditComponent } from './page/sample-edit/sample-edit.component';
import { SampleComponent } from './page/sample/sample.component';
import { TestCardComponent } from './page/test-card/test-card.component';
import { TestEditComponent } from './page/test-edit/test-edit.component';
import { TestComponent } from './page/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'physician',
    component: PhysicianComponent,
  },
  {
    path: 'physician-edit/:id',
    component: PhysicianEditComponent,
  },
  {
    path: 'patient',
    component: PatientComponent,
  },
  {
    path: 'patient-edit/:id',
    component: PatientEditComponent,
  },
  {
    path: 'sample',
    component: SampleComponent,
  },
  {
    path: 'sample-edit/:id',
    component: SampleEditComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'test-edit/:id',
    component: TestEditComponent,
  },
  {
    path: 'reagent',
    component: ReagentComponent,
  },
  {
    path: 'reagent-edit/:id',
    component: ReagentEditComponent,
  },
  {
    path: 'test-card',
    component: TestCardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
