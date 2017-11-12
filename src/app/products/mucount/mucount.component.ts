import {Component, OnInit, HostBinding, OnDestroy, ViewChild, ElementRef} from '@angular/core';
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

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('FAQ') faq: ElementRef;
  @ViewChild('counter') counter: ElementRef;
  @ViewChild('order') order: ElementRef;
  @ViewChild('login') login: ElementRef;

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetMucount();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetMucount();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'faq') {
        this.GoToFaq();
      } else if (this.name === 'licznik') {
        this.GoToCounter();
      } else if (this.name === 'logowanie') {
        this.GoToLogin();
      } else if (this.name === 'zamowienie') {
        this.GoToOrder();
      }
    });
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
