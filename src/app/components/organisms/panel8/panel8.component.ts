import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-panel8',
  templateUrl: './panel8.component.html',
  styleUrls: ['./panel8.component.scss']
})
export class Panel8Component implements OnInit {

  constructor(private animateElem: AnimationService) { }

  ngOnInit(): void {
    this.animateElem.elemInView(document.querySelector('#panel8 app-container'))
  }

}
