import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-window',
  templateUrl: './media-window.component.html',
  styleUrls: ['./media-window.component.scss']
})
export class MediaWindowComponent implements OnInit {
  @Input() variant:string = 'single';
  @Input() label:string = '';
  @Input() windowWidth:string = '100%';
  @Input() windowHeight:string = '100%';
  @Input() isHidden:string = 'false';
  windowStyle: Object = {};

  constructor() { }

  ngOnInit(): void {
    this.windowStyle = {
      'width': this.windowWidth,
      'height': this.windowHeight,
    }
  }

}
