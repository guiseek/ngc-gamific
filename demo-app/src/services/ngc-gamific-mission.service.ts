// import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NgcGamificMissionService {
  public name: string;
  public points: number;
  public state: BehaviorSubject<any>;
  events: Subject<any> = new Subject();
  public subs: Subscription[] = [];

  constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
  }
  public start(fn) {
    console.log('start');
    // const sub = this.events.subscribe(() => {
      // return this.state.next({
      //   ...this.state.getValue()
      // });
    // });
    // this.state.next({
    //   ...this.state.getValue()
    // });
    // });
    // this.subs.push(sub);
    return fn();
  }
  public achieve(fn) {
    console.log('achieve');
    return fn();
    // const sub = this.events.subscribe(() => {
    // return this.state.next({
    //   ...this.state.getValue(),
    //   event: 'achieve'
    // });
    // });
    // this.subs.push(sub);
    // return fn();
    //   console.log('achieve: ', v);
    // this.state.next({
    //   ...this.state.getValue(),
    //   event: 'achieve'
    // });
    // });
  }
}