import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, doc, getDocs, query, where } from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { AuthGuardService } from 'src/app/shared/authguard.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  responsedata: any;
  message: any;
  constructor(private formBuilder: FormBuilder, private authguard: AuthGuardService, private router: Router, private authservice: AuthService, private http: HttpClient) {}
  jwt: any;
  login!: FormGroup;
  isSubmitted = false;
  db: Firestore = inject(Firestore);
  username: any;
  Password: any;
  docID: any;
  success: boolean = false;
  invalid: boolean = true;
  data: any;
  isDisabled: boolean = false;
  ngOnInit() {
    this.login = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get fc() {
    return this.login.controls;
  }

  async onSubmit() {

    this.isSubmitted = true;
    this.invalid = false;
    this.isDisabled = true;
    if(this.login.invalid) {
      this.invalid = true
      alert("Username or Password field is required!");
      this.invalid = true;
      this.isSubmitted = false;
      this.isDisabled = false;
    }
    else {
      const docRef = doc(this.db, 'adminAccounts', this.fc.username.value);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        const usernameMatch = docSnap.data().username === this.fc.username.value;
        const passwordMatch = docSnap.data().password === this.fc.password.value;

        if(usernameMatch && passwordMatch) {
          this.success = true;
          this.data = {
            username: this.fc.username.value,
            status: this.success
          };
          this.authservice.getMessage(this.data).subscribe(data => {
            this.message = data;
            if(this.message.status) {
              localStorage.setItem('token', this.message.jwtBearerToken)
              this.router.navigate(['/admin/dashboard']);
            }
          });
        }
        else {
          alert("Incorrect Username or Password");
          this.invalid = true;
          this.isSubmitted = false;
          this.isDisabled = false;
        }
      }
      else {
        alert("Invalid Username or Password");
        this.invalid = true;
        this.isSubmitted = false;
        this.isDisabled = false;
      }
    }
  }
}
