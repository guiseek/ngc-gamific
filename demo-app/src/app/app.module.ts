import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgcGamificModule } from './../services/ngc-gamific.module';


import { AppComponent } from './app.component';

const GamificConfig = {
  points: 0,
  goals: [{
    name: 'init',
    points: 100,
    action: (level) => {
      console.log('goal action', level)
    },
    callbacks: [(x) => {
      console.log('goal: ', x)
    }, (err) => {
      console.error('error: ', err)
    }, () => {
      console.log('goal...')
    }]
  }],
  progress: [{
    name: 'init',
    points: 100,
    action: (level) => {
      console.log('progress action', level)
    },
    callbacks: [(x) => {
      console.log('progress: ', x)
    }, (err) => {
      console.error('error: ', err)
    }, () => {
      console.log('progress...')
    }]
  }],
  missions: [{
    name: 'checkin',
    points: 20,
    callbacks: [(x) => {
      console.log('start:', x)
    }, (err) => {
      console.error('error: ', err)
    }, () => {
      console.log('checkin...')
    }]
  }, {
    name: 'table',
    points: 50,
    callbacks: [(x) => {
      console.log('start', x)
    }, (err) => {
      console.error('error: ', err)
    }, () => {
      console.log('table...')
    }]
  }]
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgcGamificModule.forRoot(GamificConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
