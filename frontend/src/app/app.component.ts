import { Component,Input, OnInit} from '@angular/core';
import {Card} from "./models/Card";
import {CommonModule, NgFor, ViewportScroller} from "@angular/common";
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {CardListComponent} from "./card-list/card-list.component";
import {SidebarComponent} from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    NgFor,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CardListComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  @Input() cardMainMenu! : Card[]
  showSidebar: boolean = false;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}


  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        const anchorLinks = document.querySelectorAll('.anchor-link');

        let isAnchorNavigation = false;
        anchorLinks.forEach((link: Element) => {
          if ((link as HTMLAnchorElement).href.endsWith(currentUrl)) {
            isAnchorNavigation = true;
          }
        });

        if (!isAnchorNavigation) {
          this.scrollUp();
        }
      }
    });
  }

  scrollUp(){
    this.viewportScroller.scrollToPosition([0,0])
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}