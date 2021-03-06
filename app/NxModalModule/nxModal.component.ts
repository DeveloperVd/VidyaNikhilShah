import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  OnInit, HostBinding, keyframes, trigger, transition, animate,  style, state} from '@angular/core';
import * as $ from 'jquery';
@Component({
  moduleId: module.id,
  selector: 'nxModal',  
  //encapsulation:ViewEncapsulation.None,
  styleUrls: ['nxModal.component.css'],
  templateUrl: 'nxModal.component.html',
  
})

export class NxModalComponent {
  // @HostBinding('@routeAnimation') get routeAnimation() {
  //   return true;
  // }

  @Input() data: any;
  selectedIndex: number;
  public visible = false;
  private visibleAnimate = false;

  public show(selectedIndex: number): void {
    this.selectedIndex = selectedIndex;
    this.visible = true;
    setTimeout(() => {
      this.visibleAnimate = true
    });
  }

  public hide(event:any): void {
    event.stopPropagation();
    this.visibleAnimate = false;
    this.selectedIndex = -1;
    setTimeout(() => this.visible = false, 300);
  }

  nextStopPropagation(event:any){
    event.stopPropagation();
    //$('#myCarousel').carousel("next");
  }

  prevStopPropagation(event:any){
    event.stopPropagation();
    //$('#myCarousel').carousel("prev");
  }

}