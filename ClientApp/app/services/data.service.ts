import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Product } from '../models/product'

@Injectable()
export class DataService {

    constructor(private http: Http) { }
    
    getProducts(): Observable<Product[]> {
        return this.http.get('http://localhost:64847/api/products')
            .map(response => response.json())
            .catch(err => err);
    }
}
