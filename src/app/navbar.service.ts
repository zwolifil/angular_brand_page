import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

  // order is array is the same as in navigation menu
  // count = 0; inf = 1; wild = 2; software = 3; sensors = 4; ven = 5; ware = 6
  Is_display: boolean[] = new Array(7);
  i: number;

  constructor() {
    for (this.i = 0; this.i < this.Is_display.length; this.i++) {
      this.Is_display[this.i] = false;
    }
  }

  SetCount() {
    if (this.Is_display[0] === true) {
      this.Is_display[0] = false;
    } else {
      this.Is_display[0] = true;
    }
  }
  SetInf() {
    if (this.Is_display[1] === true) {
      this.Is_display[1] = false;
    } else {
      this.Is_display[1] = true;
    }
  }
  SetWild() {
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
  SetVen() {
    if (this.Is_display[5] === true) {
      this.Is_display[5] = false;
    } else {
      this.Is_display[5] = true;
    }
  }
  SetWare() {
    if (this.Is_display[6] === true) {
      this.Is_display[6] = false;
    } else {
      this.Is_display[6] = true;
    }
  }
}
