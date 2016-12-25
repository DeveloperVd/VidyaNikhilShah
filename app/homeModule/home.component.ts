import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'home',
  styleUrls:['home.component.css'],
  templateUrl: 'home.component.html',
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('2s ease-in')
      ]),
      transition('* => void', [
        animate('2s ease-out', style({
          opacity: 1,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class HomeComponent { 
nikhilimgpath:string="./public/images/nyks.jpg";
vidyaimgpath:string="./public/images/vd.jpg";
  
 @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostBinding('style.display') get display() {
    return 'block';
  } 
  @HostBinding('style.position') get position() {
    return 'absolute';
  }
  constructor(){
  }
 
}