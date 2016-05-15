import { Component, Input } from '@angular/core';

@Component({
    selector: 'schemr-previewer',
    templateUrl: 'app/components/previewer/previewer.html'

})

export class SchemrPreviewer {
    @Input() colorStrips;
}
