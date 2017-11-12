import {Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterViewInit {

  @ViewChild('Ybeacon') Ybeacon: ElementRef;
  @ViewChild('PinParking') PinParking: ElementRef;
  @ViewChild('Chillaby') Chillaby: ElementRef;
  @ViewChild('Venite') Venite: ElementRef;

  constructor() { }

  ngOnInit() {
    scroll(0,0);
  }

  ngAfterViewInit() {
  }
}
