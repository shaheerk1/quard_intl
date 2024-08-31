import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-bottom-links',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sidebar-bottom-links.component.html',
  styleUrl: './sidebar-bottom-links.component.css'
})
export class SidebarBottomLinksComponent {
  links = [
    { name: 'Help and first steps' },
    { name: 'Sales' },
    { name: 'Design' },
    { name: 'Office' },
    { name: 'Legal' },
  ];
}
