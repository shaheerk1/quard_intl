import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-folders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folders.component.html',
  styleUrl: './folders.component.css'
})
export class FoldersComponent {
  folders = [
    {
      name: 'Products',
      isOpen: true,
      subfolders: ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analytics']
    },
    {
      name: 'Sales',
      isOpen: false,
      subfolders: ['Leads', 'Opportunities', 'Invoices']
    },
    {
      name: 'Design',
      isOpen: false,
      subfolders: ['Sketches', 'Wireframes', 'Final Designs']
    },
    {
      name: 'Office',
      isOpen: false,
      subfolders: ['Policies', 'Meeting Notes', 'Reports']
    },
    {
      name: 'Legal',
      isOpen: false,
      subfolders: ['Contracts', 'NDAs', 'Compliance']
    }
  ];

  toggleFolder(folder: any) {
    folder.isOpen = !folder.isOpen;
  }
}
