import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-panel5',
  templateUrl: './panel5.component.html',
  styleUrls: ['./panel5.component.scss']
})
export class Panel5Component implements OnInit {

  constructor(private animateElem: AnimationService) { }

  ngOnInit(): void {
    this.animateElem.elemInView(document.querySelector('#panel5 app-container'))
  }

}
