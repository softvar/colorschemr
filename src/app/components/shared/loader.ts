import { Component, Input } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: 'app/components/shared/loader.html'
})
export class Loader {
  @Input() msg;
  constructor() {}
  ngOnInit() {}
}
