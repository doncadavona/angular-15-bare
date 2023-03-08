import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
