import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
    reviewsList = [
        {
            id: 1,
            title: 'body',
            message: 'move it!'
        },
        {
            id: 2,
            title: 'head',
            message: 'get off!'
        }
    ];


    constructor(){

    }

    ngOnInit(){

    }
}