import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-request',
  templateUrl: './query-request.component.html',
  styleUrls: ['./query-request.component.css', '../../css/creative.min.css',
    '../../vendor/bootstrap/css/bootstrap.min.css',
    '../../vendor/font-awesome/css/font-awesome.min.css',
    '../../vendor/magnific-popup/magnific-popup.css']
})
export class QueryRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    scroll(0,0);
  }

}
