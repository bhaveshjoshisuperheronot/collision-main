import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-panel7',
  templateUrl: './panel7.component.html',
  styleUrls: ['./panel7.component.scss']
})
export class Panel7Component implements OnInit {

  constructor(private animateElem: AnimationService) { }

  ngOnInit(): void {
    this.animateElem.elemInView(document.querySelector('#panel7 app-container'))
  }

}
