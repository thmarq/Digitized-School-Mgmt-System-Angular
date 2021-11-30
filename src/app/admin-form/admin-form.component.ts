import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  constructor() { }
  public formGroup: FormGroup;

  async adminLogin() {
    console.log("Inside ");


  }

  ngOnInit(): void {
  }

}
