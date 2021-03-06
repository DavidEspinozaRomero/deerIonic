import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: "app-infinite-scroll",
  templateUrl: "./infinite-scroll.page.html",
  styleUrls: ["./infinite-scroll.page.scss"],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  //#region variables
  items: any[] = Array(20);
  //#endregion variables
  constructor() {}
  ngOnInit() {}

  //#region methods
  loadData(event) {
    setTimeout(() => {
      console.log("Done");
      const newData: any[] = Array(20);
      this.items.push(...newData);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.items.length > 50) {
        event.target.disabled = true;
      }
      // if (data.length === 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
