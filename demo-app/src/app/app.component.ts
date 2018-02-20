import { Component, OnInit } from '@angular/core';
import { NgcGamificService } from './../services/ngc-gamifc.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mission;
  constructor(public gamificService: NgcGamificService) {
    // console.log(GamificService);
    // this.GamificService.setPoints(1);
    // const mission = GamificService.addMission('mission', 10);
    this.mission = gamificService.addMission({
      name: 'mission',
      points: 10,
      callbacks: [(x) => {
        console.log('start', x, this.gamificService.getPoints());
      }, (err) => {
        console.log('err: ', err);
      }, () => {
        console.log('completed......', this.gamificService.getPoints());
      }]
    });
  }
  complete(mission) {
    this.gamificService.achieveMission(mission);
    // this.mission.complete();
  }
  ngOnInit() {
    // console.log('getPoints: ', GamificService.getPoints());
    // console.log('getPoints: ', GamificService.getPoints());
  }
}
