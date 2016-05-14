import { Component, Input } from '@angular/core';

import { MDL } from './mdl';

@Component({
  selector: 'loader',
  templateUrl: 'app/components/shared/loader.html',
  providers: [],
  directives: [ MDL ],
  pipes: []
})
export class Loader {
  @Input() msg;
  constructor() {}
  ngOnInit() {}
}
