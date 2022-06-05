import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-list-reorder",
  templateUrl: "./list-reorder.page.html",
  styleUrls: ["./list-reorder.page.scss"],
})
export class ListReorderPage implements OnInit {
  //#region variables
  users: Observable<any>;

  // @ViewChild('list') list: IonList
  //#endregion variables

  constructor(private _dataservice: DataService) {}
  ngOnInit() {
    this.getUsers()
  }

  //#region Apis
  getUsers() {
    this.users = this._dataservice.getUsers()
  }

  //#endregion Apis

  //#region methods
  favorite(user) {
    console.log("favorite", user);
    // this.list.closeslidingitems()
  }
  share(user) {
    console.log("share", user);
    // this.list.closeslidingitems()
  }
  unread(user) {
    console.log("unread", user);
    // this.list.closeslidingitems()
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
