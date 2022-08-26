import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor() { }

  @Input() iconWidth: string = '2rem';
  @Input() iconHeight: string = '2rem';
  @Input() bgColor: string = 'var(--black)';
  @Input() borderRadius: string = '50%';
  @Input() bgUrl: string = 'url("")';
  @Input() bgSize: string = '85%';
  @Input() bgPosition: string = 'center';
  iconStyle: Object = {}

  ngOnInit(): void {
    this.iconStyle = {
      'width': this.iconWidth,
      'height': this.iconHeight,
      'backgroundColor': this.bgColor,
      'borderRadius': this.borderRadius,
      'backgroundSize': this.bgSize,
      'backgroundImage': this.bgUrl,
      'backgroundPosition': this.bgPosition
    }
  }

}
