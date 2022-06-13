import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {
  //#region variables
  items: Observable;
  //#endregion variables

  constructor(private _dataService: DataService) {}
  ngOnInit(): void {
    this.items = this._dataService.getAlbums();
  }
  //#region Apis

  //#endregion Apis

  //#region methods
  onSearchChange(event: any) {
    console.log(event);
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
