import {Component, OnDestroy, OnInit, HostBinding, ViewChild, ElementRef, HostListener} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {NavbarService} from "../../navbar.service";
import animateScrollTo from 'animated-scroll-to';
import { ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-venite',
  templateUrl: './venite.component.html',
  styleUrls: ['./venite.component.css'],
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
export class VeniteComponent implements OnInit, OnDestroy {

  name;
  // background-positionY of images
  EkartyPos; SystemPos;
  // image HTMLElements
  ekartyElem; systemElem;
  // d-block Elements over images
  ekarty_dblock; system_dblock;
  // conteiner Elements with images
  ekarty_con;
  sum;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('system') system: ElementRef;
  @ViewChild('ekarty') karty: ElementRef;

  @HostListener('window:scroll')
  onScroll() {
    this.Init();

    // This is for ekarty-parallax
    /*if ( window.scrollY < this.ekarty_dblock.offsetHeight / 2 ) {
      this.EkartyPos = this.ekarty_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.ekarty_dblock.offsetHeight) {
      this.EkartyPos = this.ekarty_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.EkartyPos = - (window.scrollY - this.ekarty_dblock.offsetHeight) / 2;
    }
    this.ekartyElem.style.backgroundPositionY = '' + this.EkartyPos + 'px';

    // This is for system-parallax
    if ( window.scrollY < this.system_dblock.offsetHeight / 2 + this.ekarty_con.offsetHeight ) {
      this.SystemPos = this.system_dblock.offsetHeight / 2 + this.ekarty_con.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.system_dblock.offsetHeight + this.ekarty_con.offsetHeight) {
      this.SystemPos = this.system_dblock.offsetHeight / 2 + this.ekarty_con.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.SystemPos = - (window.scrollY - this.system_dblock.offsetHeight - this.ekarty_con.offsetHeight) / 2;
    }
    this.systemElem.style.backgroundPositionY = '' + this.SystemPos + 'px';*/
  }

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetVen();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetVen();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'system') {
        this.GoToSystem();
      } else if (this.name === 'karty') {
        this.GoToKarty();
      }
    });
    this.Init();

    /*this.ekartyElem = <HTMLElement> document.getElementsByClassName('ekarty-parallax').item(0);
    this.ekartyElem.style.backgroundPositionY = '' + this.ekarty_dblock.offsetHeight / 2 + 'px';
    this.systemElem = <HTMLElement> document.getElementsByClassName('system-parallax').item(0);
    this.systemElem.style.backgroundPositionY = '' + this.system_dblock.offsetHeight / 2 + 'px';*/
  }

  Init() {
    /*this.ekarty_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(0);
    this.system_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(1);

    this.ekarty_con = document.getElementById('ekarty-sec');*/
  }

  GoToTop() {
    animateScrollTo(0);
  }

  GoToSystem() {
    animateScrollTo(this.system.nativeElement);
  }
  GoToKarty() {
    animateScrollTo(this.karty.nativeElement);
  }
}
