import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../pages/list/list.page";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}
  getUsers() {
    const URL: string = "https://jsonplaceholder.typicode.com/users";
    return this.http.get<User[]>(URL);
    // .map((res: Response) => {
    //   res.json();
    // });
  }
}
