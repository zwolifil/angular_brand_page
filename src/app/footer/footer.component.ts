import { Component, OnInit } from '@angular/core';
import { LanguageService} from '../language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../../css/creative.min.css',
    '../../vendor/bootstrap/css/bootstrap.min.css',
    '../../vendor/font-awesome/css/font-awesome.min.css',
    '../../vendor/magnific-popup/magnific-popup.css']
})
export class FooterComponent implements OnInit {

   constructor(public  languageService: LanguageService) {}

  ngOnInit() {
  }

}
