import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingStudentComponent } from './components/booking-student/booking-student.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BackgroundComponent } from './components/background/background.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AuthGuardService } from './shared/authguard.service';
import { PendingComponent } from './components/pending/pending.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { RejectedComponent } from './components/rejected/rejected.component';
import { AvailabilityComponent } from './components/availability/availability.component';
const routes: Routes = [
  {
    path: 'bookings',
    component: BookingStudentComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/login',
    component: AdminLoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'bg',
    component: BackgroundComponent,
    pathMatch: 'full'
  },
  {
    path: 'confirm',
    component: ConfirmComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/dashboard',
    component: AdminComponent,
    pathMatch: 'full',
  },
  {
    path: 'header',
    component: HeaderComponent,
    pathMatch: 'full'
  },

  {
    path: 'admin/pending',
    component: PendingComponent,
    pathMatch: 'full',

  },
  {
    path: 'admin/approved',
    component: ApprovedComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/rejected',
    component: RejectedComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/availability',
    component: AvailabilityComponent,
    pathMatch: 'full'
  },
  {
    path: 'background',
    component: BackgroundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
