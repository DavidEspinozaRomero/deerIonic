import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"],
})
export class ListPage implements OnInit {
  //#region variables
  users: User[];
  //#endregion variables

  constructor(private _dataservice: DataService) {}
  ngOnInit() {}

  //#region Apis
  getUsers() {
    this.users = this._dataservice.getUsers().subcribe(console.log);
  }

  //#endregion Apis

  //#region methods
  favorite(item) {
    console.log("favorite", item);
  }
  share(item) {
    console.log("share", item);
  }
  unread(item) {
    console.log("unread", item);
  }
  //#endregion methods
}

//#region Interfaces
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
//#endregion Interfaces
