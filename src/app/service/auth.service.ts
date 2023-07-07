import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { collection, doc, getDoc, getDocs, query, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Firestore } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:3000/api';
  helper = new JwtHelperService();
  decodedToken: any;
  status: boolean = false;
  monday: any;
  tuesday: any;
  wednesday: any;
  thursday: any;
  friday: any;
  saturday: any;
  data: any;
  success: any;
  db: Firestore = inject(Firestore);
  constructor(private http: HttpClient, private router: Router) { }

  getMessage(login: any) {
    return this.http.post(this.uri + '/login', login);

  }
  getTotalVisitorByDay(): Observable<any> {
    return this.http.get(this.uri + '/dashboard').pipe(
      map((response: any) => {
        this.data = response;

      })
    );
  }
  getEvents() {
    return this.http.get(this.uri + "/events");
  }
  addEvents(events: any) {
    return this.http.post(this.uri + "/addEvents", events);
  }
  deleteEvent(data: any) {
    console.log(data);
    return this.http.post(this.uri + '/deleteEvents', data);
  }
  getPendingBookings() {
     return this.http.get(this.uri + "/getBookings");
  }

}
