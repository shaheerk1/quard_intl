import { Component } from '@angular/core';
import { SidebarTitleComponent } from '../../components/sidebar-title/sidebar-title.component';
import { SidebarBottomLinksComponent } from '../../components/sidebar-bottom-links/sidebar-bottom-links.component';
import { SidebarTeamsComponent } from '../../components/sidebar-teams/sidebar-teams.component';
import { ProductsComponent } from '../products/products.component';
import { FoldersComponent } from '../../components/folders/folders.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FoldersComponent, ProductsComponent, SidebarTeamsComponent, SidebarBottomLinksComponent, SidebarTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
