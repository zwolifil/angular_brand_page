import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

  // order is array is the same as in navigation menu
  // mucount = 0; inf.pl = 1; wildfish = 2; software = 3; sensors = 4; venite = 5; wares = 6
  Is_display: boolean[] = new Array(7);
  i: number;

  constructor() {
    for (this.i = 0; this.i < this.Is_display.length; this.i++) {
      this.Is_display[this.i] = false;
    }
  }

  SetMucount() {
    if (this.Is_display[0] === true) {
      this.Is_display[0] = false;
    } else {
      this.Is_display[0] = true;
    }
  }
  SetInfpl() {
    if (this.Is_display[1] === true) {
      this.Is_display[1] = false;
    } else {
      this.Is_display[1] = true;
    }
  }
  SetWildfish() {
    if (this.Is_display[2] === true) {
      this.Is_display[2] = false;
    } else {
      this.Is_display[2] = true;
    }
  }
  SetSoftware() {
    if (this.Is_display[3] === true) {
      this.Is_display[3] = false;
    } else {
      this.Is_display[3] = true;
    }
  }
  SetSensors() {
    if (this.Is_display[4] === true) {
      this.Is_display[4] = false;
    } else {
      this.Is_display[4] = true;
    }
  }
  SetVenite() {
    if (this.Is_display[5] === true) {
      this.Is_display[5] = false;
    } else {
      this.Is_display[5] = true;
    }
  }
  SetWares() {
    if (this.Is_display[6] === true) {
      this.Is_display[6] = false;
    } else {
      this.Is_display[6] = true;
    }
  }
}
