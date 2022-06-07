import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Componente } from "../interfaces/interfaces";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}
  getUsers() {
    const URL: string = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(URL);
    // .map((res: Response) => {
    //   res.json();
    // });
  }

  getMenuOptions() {
    const URL: string = "/assets/data/menu.json";
    return this.http.get<Componente[]>(URL);
  }
}
