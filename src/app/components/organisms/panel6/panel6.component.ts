import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-panel6',
  templateUrl: './panel6.component.html',
  styleUrls: ['./panel6.component.scss']
})
export class Panel6Component implements OnInit {

  constructor(private animateElem: AnimationService) { }

  ngOnInit(): void {
    this.animateElem.elemInView(document.querySelector('#panel6 app-container'))
  }

}
