import { Component, OnInit, HostBinding, OnDestroy, ViewChild, ElementRef, HostListener} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {NavbarService} from "../../navbar.service";
import animateScrollTo from 'animated-scroll-to';
import { ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.4s ease-in')
      ]),
      transition(':leave', [
        animate('0.4s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class SensorsComponent implements OnInit, OnDestroy {

  name;
  // background-positionY of images
  ChilabyPos; PinPos; IsenPos;
  // image HTMLElements
  chilabyElem; pinElem; isenElem;
  // d-block Elements over images
  chilaby_dblock; pin_dblock; isen_dblock;
  // conteiner Elements with images
  chilaby_con; pin_con;
  sum;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('chilaby') chilaby: ElementRef;
  @ViewChild('pinparking') pinparking: ElementRef;
  @ViewChild('isensor') isensor: ElementRef;

  @HostListener('window:scroll')
  onScroll() {
    this.Init();

    // This is for band-parallax
    if ( window.scrollY < this.chilaby_dblock / 2 ) {
      this.ChilabyPos = this.chilaby_dblock / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.chilaby_dblock) {
      this.ChilabyPos = this.chilaby_dblock / 2 - window.scrollY / 2;
    } else {
      this.ChilabyPos = - (window.scrollY - this.chilaby_dblock) / 2;
    }
    this.chilabyElem.style.backgroundPositionY = '' + this.ChilabyPos + 'px';

    // This is for pin-parallax
    /*if ( window.scrollY < this.pin_dblock.offsetHeight / 2 + this.chilaby_con.offsetHeight ) {
      this.PinPos = this.pin_dblock.offsetHeight / 2 + this.chilaby_con.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.pin_dblock.offsetHeight + this.chilaby_con.offsetHeight) {
      this.PinPos = this.pin_dblock.offsetHeight / 2 + this.chilaby_con.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.PinPos = - (window.scrollY - this.pin_dblock.offsetHeight - this.chilaby_con.offsetHeight) / 2;
    }
    this.pinElem.style.backgroundPositionY = '' + this.PinPos + 'px';

    // This is for isen-parallax
    if ( window.scrollY < this.isen_dblock.offsetHeight / 2 + this.sum) {
      this.IsenPos = this.isen_dblock.offsetHeight / 2 + this.sum / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.isen_dblock.offsetHeight + this.sum) {
      this.IsenPos = this.isen_dblock.offsetHeight / 2 + this.sum / 2 - window.scrollY / 2;
    } else {
      this.IsenPos = - (window.scrollY - this.isen_dblock.offsetHeight - this.sum) / 2;
    }
    this.isenElem.style.backgroundPositionY = '' + this.IsenPos + 'px';*/
  }

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetSensors();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetSensors();
}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'chil') {
        this.GoToChilaby();
      } else if (this.name === 'pin') {
        this.GoToPin();
      } else if (this.name === 'sensor') {
        this.GoToSensor();
      }
    });
    this.Init();

    this.chilabyElem = <HTMLElement> document.getElementsByClassName('band-parallax').item(0);
    this.chilabyElem.style.backgroundPositionY = '' + this.chilaby_dblock.offsetHeight / 2 + 'px';
    /*this.pinElem = <HTMLElement> document.getElementsByClassName('pin-parallax').item(0);
    this.pinElem.style.backgroundPositionY = '' + this.pin_dblock.offsetHeight / 2 + 'px';
    this.isenElem = <HTMLElement> document.getElementsByClassName('isen-parallax').item(0);
    this.isenElem.style.backgroundPositionY = '' + this.isen_dblock.offsetHeight / 2 + 'px';*/
  }


  Init() {
    this.chilaby_dblock = (<HTMLElement> document.getElementsByClassName('d-block').item(0)).offsetHeight
                          + (<HTMLElement> document.getElementsByClassName('d-block').item(1)).offsetHeight;
    /*this.pin_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(1);
    this.isen_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(2);*/

    this.chilaby_con = document.getElementById('chilaby-sec');
    //this.pin_con = document.getElementById('pin-sec');
    //this.sum = this.chilaby_con.offsetHeight + this.pin_con.offsetHeight;
  }

  GoToTop() {
    animateScrollTo(0);
  }

  GoToChilaby() {
    animateScrollTo(this.chilaby.nativeElement);
  }
  GoToPin() {
    animateScrollTo(this.pinparking.nativeElement);
  }
  GoToSensor() {
    animateScrollTo(this.isensor.nativeElement);
  }

}
