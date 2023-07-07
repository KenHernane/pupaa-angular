import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Firestore, collection, query, where } from '@angular/fire/firestore';
import { onSnapshot } from 'firebase/firestore';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  dataBookings: any;
  dataTable: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true
    }
    this.activateTable();
  }
  activateTable() {
    this.authService.getPendingBookings().subscribe(res => {
      this.dataBookings = res;
      this.dtTrigger.next(null);
    })

  }
}
