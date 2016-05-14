import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

@Injectable()

export class QuoteService {
    constructor(private http:Http) {}

    private quotesApiUrl = 'http://quotesondesign.com/wp-json/posts?tags=color&filter[orderby]=rand&filter[posts_per_page]=1';

    getQuote(): Observable<Object[]> {
        return this.http
            .get(this.quotesApiUrl)
            .map(this.extractData)
            .catch(this.errorHandler);
    }

    private extractData(res:Response) {
        if (res.status === 200) {
            return res.json().data || {};
        }
    }

    private errorHandler(error:any) {
        let errorMessage = error.message;
        console.log(errorMessage);

        return Observable.throw(errorMessage);
    }
}