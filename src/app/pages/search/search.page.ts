import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {
  //#region variables
  items: any[] = [];
  //#endregion variables

  constructor(private _dataService:DataService) {}
  ngOnInit(): void {
    this.items = this._dataService.getAlbums()
  }
  //#region Apis

  //#endregion Apis

  //#region methods
  onSearchChange(event:any){
    console.log(event);
    
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
