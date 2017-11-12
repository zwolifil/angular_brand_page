import {
  Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren,
  AfterViewInit
} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import animateScrollTo from 'animated-scroll-to';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css', '../../css/creative.min.css',
    '../../vendor/bootstrap/css/bootstrap.min.css',
    '../../vendor/font-awesome/css/font-awesome.min.css',
    '../../vendor/magnific-popup/magnific-popup.css'],
  animations : [
    trigger('iot', [
      state('left', style({
        transform: 'translateX(-100%)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('right', style({
        transform: 'translateX(100%)',
        opacity: '0'
      })),
      transition('left => in', animate(400)),
      transition('in => left', animate(400)),
      transition('in => right', animate(400)),
      transition('right => in', animate(400)),
      transition('right => left', [style({
        opacity: '0'
      }),
        animate(400)]),
      transition('left => right', [style({
        opacity: '0'
      }),
        animate(400)])
    ]),
    trigger('chillaby', [
      state('left', style({
        transform: 'translateX(-200%)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateX(-100%)'
      })),
      state('right', style({
        transform: 'translateX(0)',
        opacity: '0'
      })),
      transition('left => in', animate(400)),
      transition('in => left', animate(400)),
      transition('in => right', animate(400)),
      transition('right => in', animate(400)),
      transition('right => left', [style({
        opacity: '0'
      }),
        animate(400)]),
      transition('left => right', [style({
        opacity: '0'
      }),
        animate(400)])
    ]),
    trigger('muCount', [
      state('left', style({
        transform: 'translateX(-300%)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateX(-200%)'
      })),
      state('right', style({
        transform: 'translateX(-100%)',
        opacity: '0'
      })),
      transition('left => in', animate(400)),
      transition('in => left', animate(400)),
      transition('in => right', animate(400)),
      transition('right => in', animate(400)),
      transition('right => left', [style({
        opacity: '0'
      }),
        animate(400)]),
      transition('left => right', [style({
        opacity: '0'
      }),
        animate(400)])
    ]),
    trigger('ybeacon', [
      state('left', style({
        transform: 'translateX(-400%)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateX(-300%)'
      })),
      state('right', style({
        transform: 'translateX(-200%)',
        opacity: '0'
      })),
      transition('left => in', animate(400)),
      transition('in => left', animate(400)),
      transition('in => right', animate(400)),
      transition('right => in', animate(400)),
      transition('right => left', [style({
        opacity: '0'
      }),
        animate(400)]),
      transition('left => right', [style({
        opacity: '0'
      }),
        animate(400)])
    ]),
    trigger('wildfish', [
      state('left', style({
        transform: 'translateX(-500%)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateX(-400%)'
      })),
      state('right', style({
        transform: 'translateX(-300%)',
        opacity: '0'
      })),
      transition('left => in', animate(400)),
      transition('in => left', animate(400)),
      transition('in => right', animate(400)),
      transition('right => in', animate(400)),
      transition('right => left', [style({
        opacity: '0'
      }),
        animate(400)]),
      transition('left => right', [style({
        opacity: '0'
      }),
        animate(400)])
    ])
  ]
})
export class MainPageComponent implements OnInit, AfterViewInit{

  sliderCount:number  = 0;
  i: number;
  name;
  states: string[] = new Array(this.sliderCount);
  tempState = 0;
  tempDirection = 'none';
  @ViewChild('iot') iot: ElementRef;
  @ViewChild('AboutUs') AboutUs: ElementRef;
  @ViewChild('contact') Contact: ElementRef;
  @ViewChildren('Slide') Slides: QueryList<ElementRef>;

  constructor(private route: ActivatedRoute) {
    this.GoToTop();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      if (this.name === 'iot') {
        this.GoToIot();
      } else if (this.name === 'o_nas') {
        this.GoToAboutUs();
      } else if (this.name === 'kontakt') {
        this.GoToContact();
      }
    });
  }

  ngAfterViewInit() {
    this.sliderCount = this.Slides.toArray().length;
    for (this.i = 0; this.i < this.sliderCount; this.i++) {
      if (this.i === 0) {
        this.states.push('in');
      } else if (this.i === 1) {
        this.states.push('left');
      } else {
        this.states.push('right');
      }
    }
  }

  ChangeLeft() {
    if (this.tempDirection === 'none') {
      if (this.tempState > 0) {
        this.states[this.tempState - 1] = 'right';
      } else {
        this.states[this.sliderCount - 1] = 'right';
      }
    } else if (this.tempDirection === 'right') {
      if (this.tempState > 0) {
        this.states[this.tempState - 1] = 'right';
      } else {
        this.states[this.sliderCount - 1] = 'right';
      }
    } else {
      if (this.tempState < this.sliderCount - 1) {
        this.states[this.tempState + 1] = 'right';
      } else {
        this.states[0] = 'right';
      }
    }
  }

  ChangeRight() {
    if (this.tempDirection === 'none') {
      if (this.tempState < this.sliderCount - 1) {
        this.states[this.tempState + 1] = 'left';
      } else {
        this.states[0] = 'left';
      }
    } else if (this.tempDirection === 'right') {
      if (this.tempState < this.sliderCount - 1) {
        this.states[this.tempState + 1] = 'left';
      } else {
        this.states[0] = 'left';
      }
    } else {
      if (this.tempState > 0) {
        this.states[this.tempState - 1] = 'left';
      } else {
        this.states[this.sliderCount - 1] = 'left';
      }
    }
  }

  onAnimateLeft() {
    this.states[this.tempState] = 'left';
    if (this.tempState > 0) {
      this.states[this.tempState - 1] = 'in';
      this.tempState--;
    } else {
      this.states[this.sliderCount - 1] = 'in';
      this.tempState = this.sliderCount - 1;
    }
  }
  onAnimateRight() {
    this.states[this.tempState] = 'right';
    if (this.tempState < this.sliderCount - 1) {
      this.states[this.tempState + 1] = 'in';
      this.tempState++;
    } else {
      this.states[0] = 'in';
      this.tempState = 0;
    }
  }

  GoToTop() {
    animateScrollTo(0);
  }

  GoToIot() {
    animateScrollTo(this.iot.nativeElement);
  }

  GoToAboutUs() {
    animateScrollTo(this.AboutUs.nativeElement);
  }

  GoToContact() {
    animateScrollTo(this.Contact.nativeElement);
  }
}
