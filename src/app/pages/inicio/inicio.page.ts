import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  //#region variables
  list: Componente[] = [
    {
      icon: "american-football",
      label: "action sheet",
      routerlink: "/action-sheet",
    },
    { icon: "alert-circle-outline", label: "alert", routerlink: "/alert" },
    { icon: "beaker", label: "avatar", routerlink: "/avatar" },
    { icon: "radio-button-on", label: "buttons", routerlink: "/buttons" },
    { icon: "card", label: "card", routerlink: "/card" },
    { icon: "calendar", label: "date time", routerlink: "/date-time" },
    { icon: "car", label: "fab", routerlink: "/fab" },
    { icon: "grid", label: "grid", routerlink: "/grid" },
    {
      icon: "infinite",
      label: "infinite scroll",
      routerlink: "/infinite-scroll",
    },
    { icon: "hammer", label: "input - forms", routerlink: "/input" },
    { icon: "list", label: "list sliding", routerlink: "/list" },
    { icon: "move", label: "list reorder", routerlink: "/reorder" },
    { icon: "refresh-circle", label: "loading", routerlink: "/loading" },
  ];
  //#endregion variables
  constructor(private menu: MenuController) {}

  ngOnInit() {}

  //#region Methods
  toggleMenu() {
    this.menu.toggle();
  }

  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }

  // openEnd() {
  //   this.menu.open('end');
  // }

  // openCustom() {
  //   this.menu.enable(true, 'custom');
  //   this.menu.open('custom');
  // }
  //#endregion Methods
}

//#region Interfaces
interface Componente {
  icon: string;
  label: string;
  routerlink: string;
}
//#endregion Interfaces
