import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-panel3',
  templateUrl: './panel3.component.html',
  styleUrls: ['./panel3.component.scss']
})
export class Panel3Component implements OnInit {
  gifUrl:string = 'url(../../../../assets/images/panel-3/Sports.gif)';

  constructor(private animateElem: AnimationService) { }

  ngOnInit(): void {
    this.animateElem.elemInView(document.querySelector('#panel3 app-container'))
  }

  changeSection(section:string) {
    this.gifUrl = `url(../../../../assets/images/panel-3/${section}.gif)`;
  }

}
