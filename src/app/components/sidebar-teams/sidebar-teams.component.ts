import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-teams',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sidebar-teams.component.html',
  styleUrl: './sidebar-teams.component.css'
})
export class SidebarTeamsComponent {
  teams = [
    { 
      name: 'Design team', 
      icon: 'assets/pen.png', 
      shortcut: '⌘ + 1', 
      isActive: true 
    },
    { 
      name: 'Marketing Team', 
      icon: 'assets/speaker.png', 
      shortcut: '⌘ + 2', 
      isActive: false 
    },
    { 
      name: 'Development Team', 
      icon: 'assets/code.png', 
      shortcut: '⌘ + 3', 
      isActive: false 
    },
  ];
}
