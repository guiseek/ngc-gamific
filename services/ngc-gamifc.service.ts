import { NgcGamificMissionService } from './ngc-gamific-mission.service';
import { Inject, Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class NgcGamificService {
  public points: number = 0;
  public missions = Array<NgcGamificMissionService>();
  constructor(@Inject('config') private config: any) {
    this.points = config.points || this.points;
  }

  public addMission(name, points) {
    const mission = new NgcGamificMissionService(name, points);
    this.missions.push(mission);
    mission.start();
  }
}