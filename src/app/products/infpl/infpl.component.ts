import { Component, OnInit, OnDestroy, HostBinding, ViewChild, ElementRef} from '@angular/core';
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

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('1609') yo1609: ElementRef;
  @ViewChild('beacon') beacon: ElementRef;
  @ViewChild('inf') inf: ElementRef;

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetInfpl();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetInfpl();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'yoberi1609') {
        this.GoTo1609();
      } else if (this.name === 'ybeacon') {
        this.GoToBeac();
      } else if (this.name === 'infpl') {
        this.GoToInf();
      }
    });
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
