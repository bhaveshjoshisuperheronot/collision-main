import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-panel2',
  templateUrl: './panel2.component.html',
  styleUrls: ['./panel2.component.scss']
})
export class Panel2Component implements OnInit {

  constructor(private animateElem: AnimationService) { }

  ngOnInit(): void {
    this.animateElem.elemInView(document.querySelector('#panel2 app-container'), () => {
      document.querySelectorAll('#panel2 .collide__window').forEach(elem => {
        this.animateElem.elemInView(elem)
      })
    })
  }

}
