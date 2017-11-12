import { Component, OnInit, HostBinding, OnDestroy, ViewChild, ElementRef} from '@angular/core';
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

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('chilaby') chilaby: ElementRef;
  @ViewChild('pinparking') pinparking: ElementRef;
  @ViewChild('isensor') isensor: ElementRef;

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
      if (this.name === 'chilaby') {
        this.GoToChilaby();
      } else if (this.name === 'pinparking') {
        this.GoToPin();
      } else if (this.name === 'isensor') {
        this.GoToSensor();
      }
    });
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
