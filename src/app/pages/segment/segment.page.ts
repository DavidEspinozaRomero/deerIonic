import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-segment",
  templateUrl: "./segment.page.html",
  styleUrls: ["./segment.page.scss"],
})
export class SegmentPage implements OnInit {
  //#region variables
  items: Observable<any>;
  text: string;
  //#endregion variables

  constructor(private _dataService: DataService) {}
  ngOnInit(): void {
    this.items = this._dataService.getAlbums();
  }
  //#region Apis

  //#endregion Apis

  //#region methods
  onSearchChange(event: any) {
    console.log(event.detail.value);
    this.text = event.detail.value;
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
