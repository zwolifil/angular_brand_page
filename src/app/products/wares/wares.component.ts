import {Component, OnDestroy, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {NavbarService} from "../../navbar.service";
import animateScrollTo from 'animated-scroll-to';
import { ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-wares',
  templateUrl: './wares.component.html',
  styleUrls: ['./wares.component.css'],
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
export class WaresComponent implements OnInit, OnDestroy {

  name;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('lora') lora: ElementRef;
  @ViewChild('integrator') integrator: ElementRef;
  @ViewChild('hotmo') hotmo: ElementRef;

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetWares();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetWares();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'lora') {
        this.GoToLora();
      } else if (this.name === 'integrator') {
        this.GoToIntegrator();
      } else if (this.name === 'hotmo') {
        this.GoToHotmo();
      }
    });
  }

  GoToTop() {
    animateScrollTo(0);
  }

  GoToLora() {
    animateScrollTo(this.lora.nativeElement);
  }
  GoToIntegrator() {
    animateScrollTo(this.integrator.nativeElement);
  }
  GoToHotmo() {
    animateScrollTo(this.hotmo.nativeElement);
  }
}
