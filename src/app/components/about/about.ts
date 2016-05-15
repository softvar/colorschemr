import {Component} from '@angular/core';
import { NgIf } from '@angular/common';

import { MDL } from '../shared/mdl';
import { Header } from '../shared/header';
import { Footer } from '../shared/footer';

@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.html',
  styleUrls: ['app/components/about/about.css'],
  providers: [],
  directives: [ MDL, Header, Footer ],
  pipes: []
})
export class About {
  constructor() {}
  ngOnInit() {}
}
