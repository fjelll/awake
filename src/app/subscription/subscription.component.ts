import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import subscriptionData from '../../subscriptions.json';

interface SubscriptionPlan {
  title: string;
  price: string | number;
  months: number | string;
  features: string[];
}

@Component({
  selector: 'app-subscription',
  imports: [MatCardModule, CommonModule],
  standalone: true,
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {
  plans: SubscriptionPlan[] = subscriptionData.plans;
}
