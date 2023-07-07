import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {

  initScoreLakers = 0;
  initScoreCavs = 0;

  lakesScore = new BehaviorSubject<any>(this.initScoreLakers);
  cavsScore = new BehaviorSubject<any>(this.initScoreCavs);


  constructor() {
    setInterval(() => {
      this.incrementScoreOfLakes();
    }, 3000)

    setInterval(() => {
      this.incrementScoreOfCavs();
    }, 5000)

  }

  incrementScoreOfLakes() {
    this.lakesScore.next(this.initScoreLakers += 2);
  }

  incrementScoreOfCavs() {
    this.cavsScore.next(this.initScoreCavs += 4);
  }

  resetScore() {
    this.lakesScore.next(0);
    this.cavsScore.next(0);
  }

}
