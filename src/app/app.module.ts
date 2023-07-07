import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookingStudentComponent } from './components/booking-student/booking-student.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundComponent } from './components/background/background.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { PendingComponent } from './components/pending/pending.component';
import { RejectedComponent } from './components/rejected/rejected.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    AppComponent,
    BookingStudentComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    ConfirmComponent,
    AdminComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    AdminLoginComponent,
    PendingComponent,
    RejectedComponent,
    ApprovedComponent,
    AvailabilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FullCalendarModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
