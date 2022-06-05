import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"],
})
export class ListPage implements OnInit {
  //#region variables
  users: Observable<any>;
  //#endregion variables

  constructor(private _dataservice: DataService) {}
  ngOnInit() {}

  //#region Apis
  getUsers() {
    this.users = this._dataservice.getUsers().subscribe(console.log);
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
// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: UserAddress;
//   phone: string;
//   website: string;
//   company: UserCompany;
// }

// interface UserAddress {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: {
//     lat: string;
//     lng: string;
//   };
// }

// interface UserCompany {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }
//#endregion Interfaces
