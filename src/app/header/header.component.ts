import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LanguageService} from '../language.service';
import {trigger, state, style, transition, animate} from "@angular/animations";
import {NavbarService} from "../navbar.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../css/creative.min.css',
    '../../vendor/bootstrap/css/bootstrap.min.css',
    '../../vendor/font-awesome/css/font-awesome.min.css',
    '../../vendor/magnific-popup/magnific-popup.css'],
  animations: [
    trigger('nav', [
      state('hide', style({
        display: 'none',
        opacity: '0'
      })),
      state('in', style({
        display: 'block',
        opacity: '1'
      })),
      transition('hide <=> in', animate(600))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  isCollapse = true;
  state = 'hide';
  Is_display: boolean[] = new Array(7);

  @Output() Clicked = new EventEmitter<string>();

  constructor( private languageService: LanguageService, private  navbarService: NavbarService) {
    this.Is_display = this.navbarService.Is_display;
  }

  ngOnInit() {
  }

  visible() {
    this.state = 'in';
  }
  visible_subnav() {
    if (this.state === 'in') {
      this.state = 'hide';
    } else {
      this.state = 'in';
    }
  }
  hidden() {
    this.state = 'hide';
  }


  GoTo(whatIsClicked: string) {
    this.Clicked.emit(whatIsClicked);
  }

}
