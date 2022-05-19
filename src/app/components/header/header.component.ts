import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class NameComponent implements OnInit {

    //#region Variables
    @Input() title:string
    //#endregion Variables

    constructor() { }

    ngOnInit() { }
}