import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
   products = [
    {
      id: 1,
      name: 'Wix',
      logoUrl: 'assets/logos/wix.png',
      description: 'Develop a personalized fitting guide for clothing brands',
      members: ['Alice', 'Bob'],
      memberImages: ['https://randomuser.me/api/portraits/women/2.jpg', 'https://randomuser.me/api/portraits/men/2.jpg'],
      categories: ['Automation'],
      tags: ['#DigitalTransformation', '#SaaS'],
      nextMeeting: 'in 30 minutes',
    },
    {
      id: 2,
      name: 'Shopify',
      logoUrl: 'assets/logos/shopify.png',
      description: 'Introduce a cloud-based payment system for e-commerce',
      members: ['Charlie', 'David'],
      memberImages: ['https://randomuser.me/api/portraits/men/3.jpg', 'https://randomuser.me/api/portraits/men/4.jpg'],
      categories: ['E-commerce', 'B2C'],
      tags: ['#OnlineShopping', '#Digital'],
      nextMeeting: 'Tomorrow',
    },
    {
      id: 3,
      name: 'MailChimp',
      logoUrl: 'assets/logos/mailchimp.png',
      description: 'Develop a mobile app aiming to increase user engagement',
      members: ['Eva', 'Frank'],
      memberImages: ['https://randomuser.me/api/portraits/women/3.jpg', 'https://randomuser.me/api/portraits/men/5.jpg'],
      categories: ['SAAS', 'Mobile'],
      tags: ['#TechInnovation', '#Cloud'],
      nextMeeting: 'Tomorrow',
    },
    {
      id: 4,
      name: 'PayPal',
      logoUrl: 'assets/logos/paypal.png',
      description: 'This program could include fraud detection algorithms',
      members: ['Grace', 'Hank'],
      memberImages: ['https://randomuser.me/api/portraits/women/4.jpg', 'https://randomuser.me/api/portraits/men/6.jpg'],
      categories: ['Marketplace', 'Finance'],
      tags: ['#BuySellOnline', '#Payment'],
      nextMeeting: 'in 6 hours',
    },
    {
      id: 5,
      name: 'Disney',
      logoUrl: 'assets/logos/party.png',
      description: 'Introduce a B2B solution for theme park logistics',
      members: ['Ivy', 'John'],
      memberImages: ['https://randomuser.me/api/portraits/women/1.jpg', 'https://randomuser.me/api/portraits/men/1.jpg'],
      categories: ['B2B', 'B2C'],
      tags: ['#BusinessPartnerships', '#Logistics'],
      nextMeeting: 'No contact',
    },
  ];
  

  selectedProducts: boolean[] = Array(this.products.length).fill(false);

  selectAll(event: any): void {
    const checked = event.target.checked;
    this.selectedProducts = this.selectedProducts.map(() => checked);
  }

  updateSelection(index: number): void {
    this.selectedProducts[index] = !this.selectedProducts[index];

    this.selectedCount = this.getSelectedCount();
  }

  selectedCount: number = 0;

  getMeetingClass(meeting: string): string {
    if (meeting.includes('30 minutes')) {
      return 'next-meeting';
    } else if (meeting.includes('Tomorrow')) {
      return 'next-meeting tomorrow';
    } else if (meeting.includes('in 1 hour')) {
      return 'next-meeting in-hour';
    } else if (meeting.includes('No contact')) {
      return 'next-meeting no-contact';
    } else if (meeting.includes('Next month')) {
      return 'next-meeting month';
    }
    return 'next-meeting';
  }
  getSelectedCount(): number {
    return this.selectedProducts.filter(selected => selected).length;
  }
  
}
