import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.page.html",
  styleUrls: ["./input.page.scss"],
})
export class InputPage implements OnInit {
  //#region variables

  loginForm: FormGroup = this._fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.minLength(6), Validators.required]],
  });
  //#endregion variables

  constructor(private _fb: FormBuilder) {}
  ngOnInit() {}

  //#region methods
  onSubmit(){
    console.log(this.loginForm.value);
    
  }
  //#endregion methods
}

//#region Interfaces

//#endregion Interfaces
