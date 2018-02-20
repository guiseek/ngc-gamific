// import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NgcGamificMissionService {
  // private subs: Subscription[] = [];
  events: Subject<any> = new Subject();
  // public state: BehaviorSubject<any>;
  public name: string;
  public points: number;

  constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
    // this.state = new BehaviorSubject({
    //   name: this.name,
    //   points: this.points,
    //   event: 'start'
    // });
  }
  public start() {
    return this.events.subscribe(v => {
      console.log('start: ', v);
      // this.state.next({
      //   ...v.getValue()
      // });
    });
  }
  public achieve() {
    return this.events.subscribe(v => {
      console.log('achieve: ', v);
      // this.state.next({
      //   ...v.getValue()
      // });
    });
  }
}