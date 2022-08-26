import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  elemInView(el:any, callback:any = null) 
  {
    window.addEventListener('scroll', function() {
      let windowScroll = window.scrollY;
      let elementTop = el.offsetTop;

      if((elementTop - windowScroll) < window.innerHeight/2) {
        el.classList.add('animate')
        if (callback) callback();
      }
    })
  }
}
