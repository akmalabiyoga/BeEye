import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public navbar!: Boolean;
  @Output() activeNav = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit(): void {
    this.navbar = false;
  }

  navToggle() {
    this.navbar = !this.navbar
    console.log("navbar activated = "+this.navbar)
    this.activeNav.emit(this.navbar)
  }

}
