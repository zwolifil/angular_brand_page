import { Component, OnInit, OnDestroy, HostBinding, ViewChild, ElementRef, HostListener} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { NavbarService} from "../../navbar.service";
import animateScrollTo from 'animated-scroll-to';
import { ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-infpl',
  templateUrl: './infpl.component.html',
  styleUrls: ['./infpl.component.css'],
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
export class InfplComponent implements OnInit, OnDestroy {

  name;
  // background-positionY of images
  InfPos; BeacPos; YobPos;
  // image HTMLElements
  infElem; beacElem; yobElem;
  // d-block Elements over images
  inf_dblock; beac_dblock; yob_dblock;
  // conteiner Elements with images
  inf_con; beac_con;
  sum;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('1609') yo1609: ElementRef;
  @ViewChild('beacon') beacon: ElementRef;
  @ViewChild('inf') inf: ElementRef;

  @HostListener('window:scroll')
  onScroll() {
    this.Init();

    // This is for inf-parallax
    if ( window.scrollY < this.inf_dblock.offsetHeight / 2 ) {
      this.InfPos = this.inf_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.inf_dblock.offsetHeight) {
      this.InfPos = this.inf_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.InfPos = - (window.scrollY - this.inf_dblock.offsetHeight) / 2;
    }
    this.infElem.style.backgroundPositionY = '' + this.InfPos + 'px';

    // This is for beac-parallax
    if ( window.scrollY < this.beac_dblock.offsetHeight / 2 + this.inf_con.offsetHeight ) {
      this.BeacPos = this.beac_dblock.offsetHeight / 2 + this.inf_con.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.beac_dblock.offsetHeight + this.inf_con.offsetHeight) {
      this.BeacPos = this.beac_dblock.offsetHeight / 2 + this.inf_con.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.BeacPos = - (window.scrollY - this.beac_dblock.offsetHeight - this.inf_con.offsetHeight) / 2;
    }
    this.beacElem.style.backgroundPositionY = '' + this.BeacPos + 'px';

    // This is for 1609-parallax
    /*if ( window.scrollY < this.yob_dblock.offsetHeight / 2 + this.sum) {
      this.YobPos = this.yob_dblock.offsetHeight / 2 + this.sum / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.yob_dblock.offsetHeight + this.sum) {
      this.YobPos = this.yob_dblock.offsetHeight / 2 + this.sum / 2 - window.scrollY / 2;
    } else {
      this.YobPos = - (window.scrollY - this.yob_dblock.offsetHeight - this.sum) / 2;
    }
    this.yobElem.style.backgroundPositionY = '' + this.YobPos + 'px';*/
  }

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetInf();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetInf();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'lorem') {
        this.GoTo1609();
      } else if (this.name === 'cos') {
        this.GoToBeac();
      } else if (this.name === 'inf') {
        this.GoToInf();
      }
    });
    this.Init();

    this.infElem = <HTMLElement> document.getElementsByClassName('inf-parallax').item(0);
    this.infElem.style.backgroundPositionY = '' + this.inf_dblock.offsetHeight / 2 + 'px';
    this.beacElem = <HTMLElement> document.getElementsByClassName('beac-parallax').item(0);
    this.beacElem.style.backgroundPositionY = '' + this.beac_dblock.offsetHeight / 2 + 'px';
    /*this.yobElem = <HTMLElement> document.getElementsByClassName('yob-parallax').item(0);
    this.yobElem.style.backgroundPositionY = '' + this.yob_dblock.offsetHeight / 2 + 'px';*/
  }

  Init() {
    this.inf_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(0);
    this.beac_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(1);
    //this.yob_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(2);

    this.inf_con = document.getElementById('inf-sec');
    this.beac_con = document.getElementById('beac-sec');
    this.sum = this.inf_con.offsetHeight + this.beac_con.offsetHeight;
  }

  GoToTop() {
    animateScrollTo(0);
  }

  GoTo1609() {
    animateScrollTo(this.yo1609.nativeElement);
  }
  GoToBeac() {
    animateScrollTo(this.beacon.nativeElement);
  }
  GoToInf() {
    animateScrollTo(this.inf.nativeElement);
  }

}
