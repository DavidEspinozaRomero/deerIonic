import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.page.html",
  styleUrls: ["./input.page.scss"],
})
export class InputPage implements OnInit {
  //#region variables
  items: any[] = Array(12).fill("Hola");

  loginForm: FormGroup = this._fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.minLength(6), Validators.required]],
  });
  //#endregion variables
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {}

  //#region methods
  onSubmit(event:any){
    console.log(event);
    
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
