import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'enter',
    template: '<enter_main></enter_main>',
    styleUrls:  ['./app.component.css']
})

export class AppEnterComponent implements OnInit{
    fullImagePath: string;
    constructor(){
        this.fullImagePath = '/resources/pictures/background.jpg'
    }
    ngOnInit(){}
}