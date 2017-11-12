import {Component, OnDestroy, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
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

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('system') system: ElementRef;
  @ViewChild('ekarty') karty: ElementRef;

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetVenite();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetVenite();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'system') {
        this.GoToSystem();
      } else if (this.name === 'ekarty') {
        this.GoToKarty();
      }
    });
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
