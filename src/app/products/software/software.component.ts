import {Component, OnDestroy, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
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

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('polskieradio') polskieradio: ElementRef;
  @ViewChild('aviko') aviko: ElementRef;
  @ViewChild('polandspec') polandspec: ElementRef;

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
      if (this.name === 'polskieradio') {
        this.GoToRadio();
      } else if (this.name === 'aviko') {
        this.GoToAviko();
      } else if (this.name === 'polspecialist') {
        this.GoToSpec();
      }
    });
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
