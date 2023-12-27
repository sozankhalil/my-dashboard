import { Component } from '@angular/core';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
home=faHome;
rightArrow=faCaretRight;
profile = faUser;
add =faPlus;
report=faChartLine;
customer=faUsers;
logout=faRightFromBracket;

addbook:boolean = false;
onAdd(){
  this.addbook =!this.addbook;
}
}
