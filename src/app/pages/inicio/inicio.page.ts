import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //#region variables
  list= [
    {label: 'alert', routerlink: '/alert'},
    {label: 'action sheet', routerlink: '/action-sheet'},
  ]
  //#endregion variables
  constructor() { }

  ngOnInit() {
  }

}
