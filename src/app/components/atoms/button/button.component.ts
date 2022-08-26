import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnWidth:string = '15rem';
  @Input() btnHeigth:string = '4rem';
  @Input() btnFontSize:string = '1.2rem';
  @Input() hideRed:string = 'false';
  btnStyle:Object = {};
  
  constructor() { }
  
  @Input() label: string = 'Label';

  ngOnInit(): void {
    this.btnStyle = {
      'width': this.btnWidth,
      'height': this.btnHeigth
    }
  }

}
