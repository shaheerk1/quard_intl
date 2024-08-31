import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoldersComponent } from "./components/folders/folders.component";
import { ProductsComponent } from './screens/products/products.component';
import { SidebarTeamsComponent } from './components/sidebar-teams/sidebar-teams.component';
import { SidebarBottomLinksComponent } from './components/sidebar-bottom-links/sidebar-bottom-links.component';
import { SidebarTitleComponent } from './components/sidebar-title/sidebar-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoldersComponent, ProductsComponent, SidebarTeamsComponent, SidebarBottomLinksComponent, SidebarTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rsc_mng';
}
