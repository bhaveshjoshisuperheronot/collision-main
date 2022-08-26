import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { MarqueeComponent } from './components/atoms/marquee/marquee.component';
import { MediaWindowComponent } from './components/molecules/media-window/media-window.component';
import { TextTickerComponent } from './components/molecules/text-ticker/text-ticker.component';
import { BadgeComponent } from './components/atoms/badge/badge.component';
import { ContainerComponent } from './components/atoms/container/container.component';
import { TitleComponent } from './components/atoms/title/title.component';
import { Panel1Component } from './components/organisms/panel1/panel1.component';
import { Panel2Component } from './components/organisms/panel2/panel2.component';
import { Panel3Component } from './components/organisms/panel3/panel3.component';
import { StickyButtonsComponent } from './components/molecules/sticky-buttons/sticky-buttons.component';
import { Panel4Component } from './components/organisms/panel4/panel4.component';
import { Panel5Component } from './components/organisms/panel5/panel5.component';
import { Panel6Component } from './components/organisms/panel6/panel6.component';
import { Panel7Component } from './components/organisms/panel7/panel7.component';
import { Panel8Component } from './components/organisms/panel8/panel8.component';
import { AlphabetComponent } from './components/molecules/alphabet/alphabet.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconComponent,
    MarqueeComponent,
    MediaWindowComponent,
    TextTickerComponent,
    BadgeComponent,
    ContainerComponent,
    TitleComponent,
    Panel1Component,
    Panel2Component,
    Panel3Component,
    StickyButtonsComponent,
    Panel4Component,
    Panel5Component,
    Panel6Component,
    Panel7Component,
    Panel8Component,
    AlphabetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
