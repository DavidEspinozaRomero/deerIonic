import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //#region variables
  list: Component[]= [
    {icon: 'american-football', label: 'action sheet', routerlink: '/action-sheet'},
    {icon: 'appstore', label: 'alert', routerlink: '/alert'},
  ]
  //#endregion variables
  constructor() { }

  ngOnInit() {
  }

}


//#region Interfaces
interface Component {
  icon: string,
  label: string,
  routerlink: string,
}
//#endregion Interfaces