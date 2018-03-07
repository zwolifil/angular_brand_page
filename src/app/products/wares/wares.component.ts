import {Component, OnDestroy, OnInit, HostBinding, ViewChild, ElementRef, HostListener} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {NavbarService} from '../../navbar.service';
import animateScrollTo from 'animated-scroll-to';
import { ActivatedRoute, Params} from '@angular/router';

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
  // background-positionY of images
  LoraPos; IntegPos; HotmoPos;
  // image HTMLElements
  loraElem; integElem; hotmoElem;
  // d-block Elements over images
  lora_dblock; integ_dblock; hotmo_dblock;
  // conteiner Elements with images
  lora_con; integ_con;
  sum;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  @ViewChild('lora') lora: ElementRef;
  @ViewChild('integrator') integrator: ElementRef;
  @ViewChild('hotmo') hotmo: ElementRef;

  @HostListener('window:scroll')
  onScroll() {
    this.Init();

    // This is for lora-parallax
    /*if ( window.scrollY < this.lora_dblock.offsetHeight / 2 ) {
      this.LoraPos = this.lora_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.lora_dblock.offsetHeight) {
      this.LoraPos = this.lora_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.LoraPos = - (window.scrollY - this.lora_dblock.offsetHeight) / 2;
    }
    this.loraElem.style.backgroundPositionY = '' + this.LoraPos + 'px';

    // This is for integ-parallax
    if ( window.scrollY < this.integ_dblock.offsetHeight / 2 + this.lora_con.offsetHeight ) {
      this.IntegPos = this.integ_dblock.offsetHeight / 2 + this.lora_con.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.integ_dblock.offsetHeight + this.lora_con.offsetHeight) {
      this.IntegPos = this.integ_dblock.offsetHeight / 2 + this.lora_con.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.IntegPos = - (window.scrollY - this.integ_dblock.offsetHeight - this.lora_con.offsetHeight) / 2;
    }
    this.integElem.style.backgroundPositionY = '' + this.IntegPos + 'px';

    // This is for hotmo-parallax
    if ( window.scrollY < this.hotmo_dblock.offsetHeight / 2 + this.sum) {
      this.HotmoPos = this.hotmo_dblock.offsetHeight / 2 + this.sum / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.hotmo_dblock.offsetHeight + this.sum) {
      this.HotmoPos = this.hotmo_dblock.offsetHeight / 2 + this.sum / 2 - window.scrollY / 2;
    } else {
      this.HotmoPos = - (window.scrollY - this.hotmo_dblock.offsetHeight - this.sum) / 2;
    }
    this.hotmoElem.style.backgroundPositionY = '' + this.HotmoPos + 'px';*/
  }

  constructor(private navbarService: NavbarService, private route: ActivatedRoute) {
    navbarService.SetWare();
    this.GoToTop();
  }

  ngOnDestroy() {
    this.navbarService.SetWare();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'bora') {
        this.GoToLora();
      } else if (this.name === 'integrator') {
        this.GoToIntegrator();
      } else if (this.name === 'cos') {
        this.GoToHotmo();
      }
    });
    this.Init();

    /*this.loraElem = <HTMLElement> document.getElementsByClassName('lora-parallax').item(0);
    this.loraElem.style.backgroundPositionY = '' + this.lora_dblock.offsetHeight / 2 + 'px';
    this.integElem = <HTMLElement> document.getElementsByClassName('integ-parallax').item(0);
    this.integElem.style.backgroundPositionY = '' + this.integ_dblock.offsetHeight / 2 + 'px';
    this.hotmoElem = <HTMLElement> document.getElementsByClassName('hotmo-parallax').item(0);
    this.hotmoElem.style.backgroundPositionY = '' + this.hotmo_dblock.offsetHeight / 2 + 'px';*/
  }

  Init() {
    /*this.lora_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(0);
    this.integ_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(1);
    this.hotmo_dblock = <HTMLElement> document.getElementsByClassName('d-block').item(2);

    this.lora_con = document.getElementById('lora-sec');
    this.integ_con = document.getElementById('integ-sec');
    this.sum = this.lora_con.offsetHeight + this.integ_con.offsetHeight;*/
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
