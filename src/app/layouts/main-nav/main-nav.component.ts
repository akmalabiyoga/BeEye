import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  navbar!: Boolean
  sidedrop!: Boolean
  constructor() { }

  ngOnInit(): void {
    this.navbar = false
    this.sidedrop = false
  }
  navToggle(){
    this.navbar = !this.navbar
  }
  sidedropToggle(){
    this.sidedrop = !this.sidedrop
  }
}
