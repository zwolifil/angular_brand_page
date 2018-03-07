import {Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    scroll(0,0);
  }

  ngAfterViewInit() {
  }
}
