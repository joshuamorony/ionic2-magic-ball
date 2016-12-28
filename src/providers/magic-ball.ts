import { Injectable } from '@angular/core';

@Injectable()
export class MagicBall {

  answers: any;

  constructor(){

    this.answers = [
      'Yes',
      'No',
      'Maybe',
      'All signs point to yes',
      'Try again later',
      'Without a doubt',
      'Don\'t count on it',
      'Most likely',
      'Absolutely not'
    ];

  }

  getAnswers(){
    return this.answers;
  }

  getRandomAnswer(){
    return this.answers[this.getRandomInt(0, this.answers.length-1)];
  }

  getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}