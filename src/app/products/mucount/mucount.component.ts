import {Component, OnInit, HostBinding, OnDestroy, ViewChild, ElementRef, HostListener} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { NavbarService} from "../../navbar.service";
import animateScrollTo from 'animated-scroll-to';
import { ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-mucount',
  templateUrl: './mucount.component.html',
  styleUrls: ['./mucount.component.css'],
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
export class MucountComponent implements OnInit, OnDestroy {

  name;
  // background-positionY of images
  MuPos;
  // image HTMLElements
  muElem;
  // d-block Elements over images
  mu_dblock;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('FAQ') faq: ElementRef;
  @ViewChild('counter') counter: ElementRef;
  @ViewChild('order') order: ElementRef;
  @ViewChild('login') login: ElementRef;

  @HostListener('window:scroll')
  onScroll() {
    this.Init();

    // This is for wild-parallax
    if ( window.scrollY < this.mu_dblock.offsetHeight / 2 ) {
      this.MuPos = this.mu_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.mu_dblock.offsetHeight) {
      this.MuPos = this.mu_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.MuPos = - (window.scrollY - this.mu_dblock.offsetHeight) / 2;
    }
    this.muElem.style.backgroundPositionY = '' + this.MuPos + 'px';
  }

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetCount();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetCount();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'faq') {
        this.GoToFaq();
      } else if (this.name === 'cos') {
        this.GoToCounter();
      } else if (this.name === 'logowanie') {
        this.GoToLogin();
      } else if (this.name === 'zamowienie') {
        this.GoToOrder();
      }
    });
    this.Init();

    this.muElem = <HTMLElement> document.getElementsByClassName('mu-parallax').item(0);
    this.muElem.style.backgroundPositionY = '' + this.mu_dblock.offsetHeight / 2 + 'px';
  }

  Init() {
    this.mu_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(0);
  }

  GoToTop() {
    animateScrollTo(0);
  }

  GoToFaq() {
    animateScrollTo(this.faq.nativeElement);
  }
  GoToCounter() {
    animateScrollTo(this.counter.nativeElement);
  }
  GoToOrder() {
    animateScrollTo(this.order.nativeElement);
  }
  GoToLogin() {
    animateScrollTo(this.login.nativeElement);
  }

}
