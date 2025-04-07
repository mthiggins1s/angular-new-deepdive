import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // input for the image and its data.
  @Input({required: true}) image!: { src: string; alt: string; };
  // input for the h2 tag and its data.
  @Input({required: true}) title!: string;
}
