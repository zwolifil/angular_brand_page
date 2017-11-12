import { TranslateService } from '@ngx-translate/core';
import {Injectable} from '@angular/core';

@Injectable()
export class LanguageService {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
