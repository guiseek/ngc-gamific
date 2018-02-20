// import { NgcGamificMissionService } from './ngc-gamific-mission.service';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NgcGamificService {
  public points: number = 0;
  // public missions = Array<NgcGamificMissionService>();
  public missions = [];
  public goals = [];
  public progresses = [];
  public state: BehaviorSubject<any>;
  events: Subject<any> = new Subject();
  public subs: Subscription[] = [];
  constructor(@Inject('config') private config: any) {
    this.points = config.points || this.points;
    // this.missions = config.missions || this.missions;
    if (config.missions) {
      config.missions.map(mission => {
        this.addMission(mission);
      })
    }
    if (config.goals) {
      config.goals.map(goal => {
        this.addGoal(goal);
      })
    }
    if (config.progress) {
      config.progress.map(goal => {
        this.addGoal(goal);
      })
    }
  }
  public addMission(mission) {
    const subject = new BehaviorSubject(mission);
    subject.subscribe(...mission.callbacks);
    mission.subject = subject;
    this.missions.push(mission);
    return subject;
  }
  public addGoal(goal) {
    const subject = new BehaviorSubject(goal);
    subject.subscribe(...goal.callbacks);
    goal.subject = subject;
    this.goals.push(goal);
    return subject;
  }
  public addProgress(progress) {
    const subject = new BehaviorSubject(progress);
    subject.subscribe(...progress.callbacks);
    progress.subject = subject;
    this.progresses.push(progress);
    return subject;
  }
  setPoints(points) {
    this.points = points;
  }
  getPoints(): number {
    return this.points;
  }
  addPoints(points) {
    this.points += points;
    this.goals.forEach((goal, index) => {
      if (((this.points - points) < this.goals[index].points) && (this.goals[index].points <= (this.points))) {
        this.goals[index].action(this.points);
      }
    });
    // this.components.forEach((component, index) => {
    //   this.components[index].update(points);
    // });
  }
  public achieveMission(name) {
    this.missions.map(mission => {
      if (mission.name === name) {
        mission.subject.next();
        this.addPoints(mission.points);
      }
    })
  }
}