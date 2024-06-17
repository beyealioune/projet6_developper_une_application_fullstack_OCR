import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-burger',
  templateUrl: './navbar-burger.component.html',
  styleUrls: ['./navbar-burger.component.scss']
})
export class NavbarBurgerComponent implements OnInit {

  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu() {
    this.close.emit();
  }
}
