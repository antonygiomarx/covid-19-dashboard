import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  cases: { Global: { TotalConfirmed: any } };
  title = 'Social Media Dashboard';
  subTitle = `Total de casos al día de hoy ${1}`;
}
