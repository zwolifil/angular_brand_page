import {Component, OnInit, HostBinding, OnDestroy, ViewChild, ElementRef, HostListener} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { NavbarService } from "../../navbar.service";
import animateScrollTo from 'animated-scroll-to';
import { ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-wildfish',
  templateUrl: './wildfish.component.html',
  styleUrls: ['./wildfish.component.css'],
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
export class WildfishComponent implements OnInit, OnDestroy {

  name;
  // background-positionY of images
  WildPos; NemoPos; BarraPos;
  // image HTMLElements
  wildElem; nemoElem; barraElem;
  // d-block Elements over images
  wild_dblock; nemo_dblock; barra_dblock;
  // conteiner Elements with images
  wild_con; nemo_con;
  sum;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @HostListener('window:scroll')
  onScroll() {
    this.Init();

    // This is for wild-parallax
    if ( window.scrollY < this.wild_dblock.offsetHeight / 2 ) {
      this.WildPos = this.wild_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.wild_dblock.offsetHeight) {
      this.WildPos = this.wild_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.WildPos = - (window.scrollY - this.wild_dblock.offsetHeight) / 2;
    }
    this.wildElem.style.backgroundPositionY = '' + this.WildPos + 'px';

    // This is for Nemo-parallax
    if ( window.scrollY < this.nemo_dblock.offsetHeight / 2 + this.wild_con.offsetHeight ) {
      this.NemoPos = this.nemo_dblock.offsetHeight / 2 + this.wild_con.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.nemo_dblock.offsetHeight + this.wild_con.offsetHeight) {
      this.NemoPos = this.nemo_dblock.offsetHeight / 2 + this.wild_con.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.NemoPos = - (window.scrollY - this.nemo_dblock.offsetHeight - this.wild_con.offsetHeight) / 2;
    }
    this.nemoElem.style.backgroundPositionY = '' + this.NemoPos + 'px';

    // This is for Barra-parallax
    if ( window.scrollY < this.barra_dblock.offsetHeight / 2 + this.sum) {
      this.BarraPos = this.barra_dblock.offsetHeight / 2 + this.sum / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.barra_dblock.offsetHeight + this.sum) {
      this.BarraPos = this.barra_dblock.offsetHeight / 2 + this.sum / 2 - window.scrollY / 2;
    } else {
      this.BarraPos = - (window.scrollY - this.barra_dblock.offsetHeight - this.sum) / 2;
    }
    this.barraElem.style.backgroundPositionY = '' + this.BarraPos + 'px';
  }

  @ViewChild('nemo') nemo: ElementRef;
  @ViewChild('barracuda') barracuda: ElementRef;
  @ViewChild('bluetang') bluetang: ElementRef;

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetWild();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetWild();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'nemo') {
        this.GoToNemo();
      } else if (this.name === 'barracuda') {
        this.GoToBarracuda();
      } else if (this.name === 'blue') {
        this.GoToBluetang();
      }
    });
    this.Init();

    this.wildElem = <HTMLElement> document.getElementsByClassName('wild-parallax').item(0);
    this.wildElem.style.backgroundPositionY = '' + this.wild_dblock.offsetHeight / 2 + 'px';
    this.nemoElem = <HTMLElement> document.getElementsByClassName('nemo-parallax').item(0);
    this.nemoElem.style.backgroundPositionY = '' + this.nemo_dblock.offsetHeight / 2 + 'px';
    this.barraElem = <HTMLElement> document.getElementsByClassName('barra-parallax').item(0);
    this.barraElem.style.backgroundPositionY = '' + this.barra_dblock.offsetHeight / 2 + 'px';
  }

  Init() {
    this.wild_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(0);
    this.nemo_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(1);
    this.barra_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(2);

    this.wild_con = document.getElementById('wild-sec');
    this.nemo_con = document.getElementById('nemo-sec');
    this.sum = this.wild_con.offsetHeight + this.nemo_con.offsetHeight;
  }

  GoToTop() {
    animateScrollTo(0);
  }

  GoToNemo() {
    animateScrollTo(this.nemo.nativeElement);
  }
  GoToBarracuda() {
    animateScrollTo(this.barracuda.nativeElement);
  }
  GoToBluetang() {
    animateScrollTo(this.bluetang.nativeElement);
  }

}
