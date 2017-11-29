import { Injectable } from '@angular/core';
import { WidgetItem } from "./widget.model";
import { Http, Headers } from '@angular/http';

// import {  } from 'rxjs/';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};


@Injectable()
export class WidgetsService {
    
    constructor(private http: Http){ }

    all() {
      return this.http.get(`${BASE_URL}`)
        .map(response => response.json())
    }
    
    create(item: WidgetItem) {
      return this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
        .map(response => response.json() )
    }

    read(id: number){
      return this.http.get(`${BASE_URL}${id}`)
        .map(response => response.json() )
    }

    update(item: WidgetItem) {
      return this.http.patch(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
        .map(response => response.json() )
    } 

    delete(id: number) {
      return this.http.delete(`${BASE_URL}${id}`, HEADER)
        .map(response => response.json() )
    }
} 