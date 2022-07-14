import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  navbar!: Boolean
  constructor() { }

  ngOnInit(): void {
    this.navbar = false
  }
  navToggle(){
    this.navbar = !this.navbar
  }
}
