import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: "app-list-reorder",
  templateUrl: "./list-reorder.page.html",
  styleUrls: ["./list-reorder.page.scss"],
})
export class ListReorderPage implements OnInit {
  //#region variables
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  items: any[] = Array(20)
  //#endregion variables

  constructor() {}
  ngOnInit() {
  }

  //#region Apis

  //#endregion Apis

  //#region methods
  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  // toggleReorderGroup() {
  //   this.reorderGroup.disabled = !this.reorderGroup.disabled;
  // }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
