import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: [ 'app/components/shared/css/style.css' ]
})
export class Home {
  constructor(public router: Router) {}
  ngOnInit() {}
}
