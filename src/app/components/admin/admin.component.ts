import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import Chart from 'chart.js/auto';
import { FormBuilder, FormControl } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Firestore, collection, getCountFromServer, query, where } from '@angular/fire/firestore';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: any;
  view: any = 'day';
  dayData: any;
  monthdata: any;
  yearData: any;
  day: any;
  sum: any;
  dataVisitor: any;
  decodedToken: any
  jwtBearerToken: any;
  monday: any;
  tuesday: any;
  wednesday: any;
  thursday: any;
  friday: any;
  data: any;
  saturday: any;
  db: Firestore = inject(Firestore);



  helper = new JwtHelperService();
  constructor(public authService: AuthService, private formBuilder: FormBuilder) {

  }
  value: any;
  select = this.formBuilder.group({
    control: new FormControl('')
  });


  async getMondayVisitor() {
    const col = collection(this.db, 'studentBookings');
    const q = query(col, where("day", "==", "Monday"));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }

  async getTuesdayVisitor() {
    const col = collection(this.db, 'studentBookings');
    const q = query(col, where("day", "==", "Tuesday"));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }
  async getWednesdayVisitor() {
    const col = collection(this.db, 'studentBookings');
    const q = query(col, where("day", "==", "Wednesday"));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }
  async getThursdayVisitor() {
    const col = collection(this.db, 'studentBookings');
    const q = query(col, where("day", "==", "Thursday"));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }
  async getFridayVisitor() {
    const col = collection(this.db, 'studentBookings');
    const q = query(col, where("day", "==", "Friday"));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }
  async getSaturdayVisitor() {
    const col = collection(this.db, 'studentBookings');
    const q = query(col, where("day", "==", "Saturday"));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }

  async getPendingVisitor() {
    const col = collection(this.db, 'studentBookings');
    const q = query(col, where("status", "==", "Pending"));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }
  async getApprovedVisitor() {
    const col = collection(this.db, 'studentBookings');
    const q = query(col, where("status", "==", "Approved"));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }
  async getRejectedVisitor() {
    const col = collection(this.db, 'studentBookings');
    const q = query(col, where("status", "==", "Rejected"));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }

  async ngOnInit(): Promise<void> {
    const mondayValue = await this.getMondayVisitor();
    const tuesdayValue = await this.getTuesdayVisitor();
    const wednesdayValue = await this.getWednesdayVisitor();
    const thursdayValue = await this.getThursdayVisitor();
    const fridayValue = await this.getFridayVisitor();
    const saturdayValue = await this.getSaturdayVisitor();
    const pending = await this.getPendingVisitor();
    const approved = await this.getApprovedVisitor();
    const rejected = await this.getRejectedVisitor();

    this.jwtBearerToken = localStorage.getItem('token');
    this.decodedToken = this.helper.decodeToken(this.jwtBearerToken);
    this.admin = this.decodedToken.username;
    this.dayData = [mondayValue, tuesdayValue, wednesdayValue, thursdayValue, fridayValue, saturdayValue];

    //this.dayData = [this.dataVisitor.monday, this.dataVisitor.tuesday, this.dataVisitor.wednesday, this.dataVisitor.thursday, this.dataVisitor.friday, this.dataVisitor.friday];
    this.monthdata = [400, 550, 600, 520];
    this.yearData = [5000, 6000, 6500, 7000, 7500, 8000, 9000, 8500, 9500, 10000, 11000, 12000];
    this.day = this.createDayChart(this.dayData);

    //doughnut chart
    const data = {
      labels: ['Rejected', 'Pending', 'Approved '],
      datasets: [{
        label: 'Data',
        data: [rejected, pending, approved],
        backgroundColor: [
          '#FF0000',
          '#FFFF00',
          '#00FF00'
        ],
        hoverBackgroundColor: [
          '#FF0000',
          '#FFFF00',
          '#00FF00'
        ]
      }]
    };

    // Configuration options for the chart
    const options = {
      responsive: true,
      plugins: {
        legend: {

          labels: {
            font: {
              size: 14
            }
          }
        },
        title: {
          display: true,
          text: 'Booking Chart',
          font: {
            size: 20,
            weight: 'bold'
          }
        }
      }
    };
    const doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: data,
      options: options
    });
  }
  onChange(event: any) {
    this.view = event;
    if (this.view === 'day') {
      this.sum = 0;
      this.day.destroy();
      this.day = this.createDayChart(this.dayData);
      for(var i = 0; i < this.dayData.length; i++) {
        this.sum = this.sum + this.dayData[i];
      }
      this.displayVisitorData(this.sum);
    } else if (this.view === 'week') {
        this.sum = 0;
        this.day.destroy();
        this.day = this.createWeekChart(this.monthdata);
        for(var i = 0; i < this.monthdata.length; i++) {
          this.sum = this.sum + this.monthdata[i];
        }
        this.displayVisitorData(this.sum);
    } else if (this.view === 'year') {
        this.sum = 0;
        this.day.destroy();
        this.day = this.createYearChart(this.yearData);
        for(var i = 0; i < this.yearData.length; i++) {
          this.sum = this.sum + this.yearData[i];
        }
        this.displayVisitorData(this.sum);
    }
  }

  displayVisitorData(data: any) {
    this.data = data;
  }
  createDayChart(data: any) {
    return new Chart('chart', {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Visitors per Day',
          data: data,
          backgroundColor: 'rgba(0, 123, 255, 0.3)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  createWeekChart(data: any) {
    return new Chart('chart', {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Visitors per Week',
          data: data,
          backgroundColor: 'rgba(255, 193, 7, 0.3)',
          borderColor: 'rgba(255, 193, 7, 1)',
          borderWidth: 2
        }]
      },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
    createYearChart(data: any) {
      return new Chart('chart', {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Visitors per Month',
            data: data,
            backgroundColor: 'rgba(40, 167, 69, 0.3)',
            borderColor: 'rgba(40, 167, 69, 1)',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
}
