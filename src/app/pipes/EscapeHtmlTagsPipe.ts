import { Pipe } from '@angular/core';

@Pipe({
    name: 'escapehtmltags'
})
export class EscapeHtmlTagsPipe {
    transform(text) {
        return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }
}
