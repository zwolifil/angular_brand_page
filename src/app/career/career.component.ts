import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css', '../../css/creative.min.css',
    '../../vendor/bootstrap/css/bootstrap.min.css',
    '../../vendor/font-awesome/css/font-awesome.min.css',
    '../../vendor/magnific-popup/magnific-popup.css']
})
export class CareerComponent implements OnInit {

  // background-positionY of images
  InfPos;
  // image HTMLElements
  infElem;
  // d-block Elements over images
  inf_dblock;

  @HostListener('window:scroll')
  onScroll() {
    this.Init();

    // This is for wild-parallax
    if ( window.scrollY < this.inf_dblock.offsetHeight / 2 ) {
      this.InfPos = this.inf_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else if (window.scrollY <= this.inf_dblock.offsetHeight) {
      this.InfPos = this.inf_dblock.offsetHeight / 2 - window.scrollY / 2;
    } else {
      this.InfPos = - (window.scrollY - this.inf_dblock.offsetHeight) / 2;
    }
    this.infElem.style.backgroundPositionY = '' + this.InfPos + 'px';
  }

  constructor() { }

  ngOnInit() {
    scroll(0,0);
    this.Init();

    this.infElem = <HTMLElement> document.getElementsByClassName('inf-parallax').item(0);
    this.infElem.style.backgroundPositionY = '' + this.inf_dblock.offsetHeight / 2 + 'px';
  }
  Init() {
    this.inf_dblock = <HTMLElement> document.getElementsByClassName('clearfix').item(0);
  }

}
