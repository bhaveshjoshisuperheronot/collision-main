import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() rotate:string = '0';
  @Input() translate:string = '0,0';
  @Input() top:string = '0';
  @Input() left:string = '0';
  badgeStyle:Object = {};

  constructor() { }

  ngOnInit(): void {
    this.badgeStyle = {
      'transform': `translate(${this.translate}) rotate(${this.rotate}deg)`,
      'top': `${this.top}`,
      'left': `${this.left}`,
    }
  }

}
