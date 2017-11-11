import {Component, ViewChild} from '@angular/core';
import {LanguageService} from './language.service';
import {NavbarService} from "./navbar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/creative.min.css',
  '../vendor/bootstrap/css/bootstrap.min.css',
  '../vendor/font-awesome/css/font-awesome.min.css',
  '../vendor/magnific-popup/magnific-popup.css'],
  providers: [LanguageService, NavbarService]
})
export class AppComponent {
  title = 'app';

  constructor( public languageService: LanguageService) {}

}
