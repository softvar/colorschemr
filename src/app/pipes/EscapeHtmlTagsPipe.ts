import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'escapehtmltags'
})
export class EscapeHtmlTagsPipe implements PipeTransform {
    transform(text) {
        return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }
}
