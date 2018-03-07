import {Component, OnDestroy, OnInit, HostBinding, ViewChild, ElementRef, HostListener} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {NavbarService} from "../../navbar.service";
import animateScrollTo from 'animated-scroll-to';
import { ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css'],
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
export class SoftwareComponent implements OnInit, OnDestroy {

  name;
  // background-positionY of images
  PprPos; AvikoPos; PsPos;
  // image HTMLElements
  pprElem; avikoElem; psElem;
  // d-block Elements over images
  ppr_dblock; aviko_dblock; ps_dblock;
  // conteiner Elements with images
  ppr_con; aviko_con;
  sum;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('polskieradio') polskieradio: ElementRef;
  @ViewChild('aviko') aviko: ElementRef;
  @ViewChild('polandspec') polandspec: ElementRef;

  @HostListener('window:scroll')
  onScroll() {
    this.Init();

    // This is for ppr-parallax
    /*if ( window.scrollY < this.ppr_dblock.offsetHeight / 2 ) {
      this.PprPos = this.ppr_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.ppr_dblock.offsetHeight) {
      this.PprPos = this.ppr_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.PprPos = - (window.scrollY - this.ppr_dblock.offsetHeight) / 2;
    }
    this.pprElem.style.backgroundPositionY = '' + this.PprPos + 'px';

    // This is for aviko-parallax
    if ( window.scrollY < this.aviko_dblock.offsetHeight / 2 + this.ppr_con.offsetHeight ) {
      this.AvikoPos = this.aviko_dblock.offsetHeight / 2 + this.ppr_con.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.aviko_dblock.offsetHeight + this.ppr_con.offsetHeight) {
      this.AvikoPos = this.aviko_dblock.offsetHeight / 2 + this.ppr_con.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.AvikoPos = - (window.scrollY - this.aviko_dblock.offsetHeight - this.ppr_con.offsetHeight) / 2;
    }
    this.avikoElem.style.backgroundPositionY = '' + this.AvikoPos + 'px';

    // This is for ps-parallax
    if ( window.scrollY < this.ps_dblock.offsetHeight / 2 + this.sum) {
      this.PsPos = this.ps_dblock.offsetHeight / 2 + this.sum / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.ps_dblock.offsetHeight + this.sum) {
      this.PsPos = this.ps_dblock.offsetHeight / 2 + this.sum / 2 - window.scrollY / 2;
    } else {
      this.PsPos = - (window.scrollY - this.ps_dblock.offsetHeight - this.sum) / 2;
    }
    this.psElem.style.backgroundPositionY = '' + this.PsPos + 'px';*/
  }

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetSoftware();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetSoftware();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'radio') {
        this.GoToRadio();
      } else if (this.name === 'soft') {
        this.GoToAviko();
      } else if (this.name === 'pol') {
        this.GoToSpec();
      }
    });
    this.Init();

    /*this.pprElem = <HTMLElement> document.getElementsByClassName('ppr-parallax').item(0);
    this.pprElem.style.backgroundPositionY = '' + this.ppr_dblock.offsetHeight / 2 + 'px';
    this.avikoElem = <HTMLElement> document.getElementsByClassName('aviko-parallax').item(0);
    this.avikoElem.style.backgroundPositionY = '' + this.aviko_dblock.offsetHeight / 2 + 'px';
    this.psElem = <HTMLElement> document.getElementsByClassName('ps-parallax').item(0);
    this.psElem.style.backgroundPositionY = '' + this.ps_dblock.offsetHeight / 2 + 'px';*/
  }

  Init() {
    /*this.ppr_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(0);
    this.aviko_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(1);
    this.ps_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(2);

    this.ppr_con = document.getElementById('ppr-sec');
    this.aviko_con = document.getElementById('aviko-sec');
    this.sum = this.ppr_con.offsetHeight + this.aviko_con.offsetHeight;*/
  }

  GoToTop() {
    animateScrollTo(0);
  }

  GoToRadio() {
    animateScrollTo(this.polskieradio.nativeElement);
  }
  GoToAviko() {
    animateScrollTo(this.aviko.nativeElement);
  }
  GoToSpec() {
    animateScrollTo(this.polandspec.nativeElement);
  }
}
