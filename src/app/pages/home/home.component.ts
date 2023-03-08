import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeAnimation } from 'src/app/components/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeAnimation]
})
export class HomeComponent {
  links = [
    {
      title: 'Products',
      icon: 'assets/images/box.svg',
      path: '/products'
    }
  ];

  constructor(private router: Router) {}

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
