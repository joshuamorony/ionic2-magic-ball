import { Component } from '@angular/core';
import { MagicBall } from '../../providers/magic-ball';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  answer: any = "..."

  constructor(public magicBall: MagicBall) {
    
  }

  showAnswer(){
    this.answer = this.magicBall.getRandomAnswer();
  }

}