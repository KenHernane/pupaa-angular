import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Firestore, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from '@angular/fire/firestore';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FullCalendarComponent } from '@fullcalendar/angular'; // must go before plugins
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { updateDoc } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
declare var window: any;
@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})

export class AvailabilityComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private as: AuthService) {}

  eventTitle: any;
  hideCalendar = "Show Calendar";
  hideEdit: boolean = true;
  formModal: any;
  deleteModal: any;
  detailsModal: any;
  editModal: any;
  db: Firestore = inject(Firestore);
  events: any = [];
  startDate: any;
  endDate: any;
  isSubmitted = false;
  data: any;
  eventsValue = new BehaviorSubject<any>(this.events);
  yesterdayDate: any;
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("add-modal")
    );
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("delete-modal")
    );
    this.detailsModal = new window.bootstrap.Modal(
      document.getElementById("details-modal")
    );
    this.editModal = new window.bootstrap.Modal(
      document.getElementById("edit-modal")
    );
    this.as.getEvents().subscribe(res => {
      this.data = res;
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        headerToolbar: {
          center: 'addEventButton'
        },
        customButtons: {
          addEventButton: {
            text: 'Add Event',
            click: this.openAddModal.bind(this)
          }
        },
        plugins: [dayGridPlugin, interactionPlugin],
        events: this.data.events,
        eventColor: this.data.events.color,
        weekends: true,
        dateClick: this.handleDateClick.bind(this)
      }
    })
  }
  show: boolean = false;
  count: number = 0;
  showAddEvent: boolean = false;

  deleteEvent() {
    this.detailsModal.hide();
    this.deleteModal.show();

  }
  findDelete() {
    console.log(this.startDate);
    const data = {
      docID: this.startDate
    }
    alert('Event Deleted');
    location.reload();
    console.log(data);
    this.as.deleteEvent(data).subscribe(res => {


    })

  }
  closeDetailsModal() {
    this.detailsModal.hide();
  }
  openAddModal() {
    this.detailsModal.hide();
    this.formModal.show();
  }
  closeAddModal() {
    this.formModal.hide();
  }
  closeDeleteModal() {
    this.deleteModal.hide();
  }
  closeDetailModal() {
    this.detailsModal.hide()
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin]
  };



  async showCalendar() {
    let date = new Date();
    this.yesterdayDate = date.toISOString().slice(0, 10);

    this.hideCalendar = "Hide Calendar";
    this.show = true;
    this.showAddEvent = true;
    this.count += 1;
    if(this.count % 2 == 0) {
      this.show = false;
      this.showAddEvent = false;
      this.hideCalendar = "Show Calendar";
    }
    else {
      this.show = true;
      this.showAddEvent = true;
      this.hideCalendar = "Hide Calendar"

    }

  }

  async handleDateClick(arg: any) {
    this.detailsModal.show();

    const docRef = doc(this.db, 'events', arg.dateStr);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
      this.hideEdit = false;
      this.eventTitle = docSnap.data().eventTitle;
      this.startDate = docSnap.data().date;
      if(this.endDate === '') {
        this.endDate = this.startDate;
      }
      else {
        this.endDate = docSnap.data().endDate;
      }
    }
    else {
      this.eventTitle = 'none';
      this.startDate = 'none';
      this.endDate = 'none';
      this.hideEdit = true;
    }

  }
  getEvent = this.formBuilder.group({
    eventName: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl(''),
    color: new FormControl('', [Validators.required])
  })
 @ViewChild('calendar') calendarEl!: ElementRef;

  get fc() {
    return this.getEvent.controls;
  }
  openEditModal() {
    this.detailsModal.hide();
    this.editModal.show();
  }
  closeEditModal() {
    this.editModal.hide();
  }

  async onSubmit() {

    this.isSubmitted = true;
    if(this.getEvent.invalid) {
      alert("Check all Fields if Correct!");
    }
    else {
      this.formModal.hide();
      const date = new Date(this.startDate).toISOString().slice(0, 10);
      alert("Event Added!" + "\n" + "Closing Reason: " + this.fc.eventName.value + "\n"  + "Starting Date: " + this.fc.startDate.value + "\n"
      + "End Date: " + this.fc.endDate.value + "\n");
      location.reload();
      const data = {
        startDate: this.fc.startDate.value,
        endDate: this.fc.endDate.value,
        color: this.fc.color.value,
        eventTitle: this.fc.eventName.value
      }
      this.as.addEvents(data).subscribe(res => {
        this.data = res;
      });

      }

  }
}


