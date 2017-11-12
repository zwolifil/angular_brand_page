import {Component, OnInit, HostBinding, OnDestroy, ViewChild, ElementRef} from '@angular/core';
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

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('nemo') nemo: ElementRef;
  @ViewChild('barracuda') barracuda: ElementRef;
  @ViewChild('bluetang') bluetang: ElementRef;

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetWildfish();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetWildfish();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'nemo') {
        this.GoToNemo();
      } else if (this.name === 'barracuda') {
        this.GoToBarracuda();
      } else if (this.name === 'bluetang') {
        this.GoToBluetang();
      }
    });
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
