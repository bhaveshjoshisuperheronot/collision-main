import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() titleFontSize:string = '9.5rem';
  titleStyle:Object = {};

  constructor() { }

  ngOnInit(): void {
    this.titleStyle = {
      'fontSize': this.titleFontSize
    }
  }

}
