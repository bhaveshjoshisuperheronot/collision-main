import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-panel4',
  templateUrl: './panel4.component.html',
  styleUrls: ['./panel4.component.scss']
})
export class Panel4Component implements OnInit {

  constructor(private animateElem: AnimationService) { }

  ngOnInit(): void {
    this.animateElem.elemInView(document.querySelector('#panel4 app-container'))
  }

}
