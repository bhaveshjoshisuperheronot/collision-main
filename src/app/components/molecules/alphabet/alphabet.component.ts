import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {
  @Input() bgImg:string = "";
  @Input() hoverBgImg:string = "";
  @Input() hoverTop:string = "0";
  @Input() hoverBottom:string = "auto";
  @Input() hoverTranslate:string = "-50%,0";
  bgImgUrl:string = `url(../../../../assets/images/panel-5/${this.bgImg})`;
  hoverBgImgUrl:string = `../../../../assets/images/panel-5/${this.hoverBgImg}`;
  hoverBgImgStyle:Object = {};
  
  constructor() { }
  
  ngOnInit(): void {
    this.bgImgUrl = `url(../../../../assets/images/panel-5/${this.bgImg})`;
    this.hoverBgImgUrl = `../../../../assets/images/panel-5/${this.hoverBgImg}`;

    this.hoverBgImgStyle = {
      'top': this.hoverTop,
      'bottom': this.hoverBottom,
      'transform': `translate(${this.hoverTranslate})`
    }
  }

}
