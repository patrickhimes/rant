import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Rant } from './rant';

@Injectable()
export class RantService {
    private rantsUrl = 'api/rants'; 
    constructor(private http: Http) {}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    private headers = new Headers({'Content-Type': 'application/json'});

    getRants(): Promise<Rant[]> {
        return this.http.get(this.rantsUrl)
                .toPromise()
                .then(response => response.json().data as Rant[])
                .catch(this.handleError);
    }

    create(rantText: string): Promise<Rant> {
        return this.http
        .post(this.rantsUrl, JSON.stringify({message: rantText}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Rant)
        .catch(this.handleError);
    }
}