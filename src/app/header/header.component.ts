import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
// import {faBars  } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  baricon=faBars;
  profileIcon=faUser;

  showMenu:boolean =true;
}
