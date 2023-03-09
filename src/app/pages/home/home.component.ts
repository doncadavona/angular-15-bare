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
    },
    {
      title: 'Users',
      icon: 'assets/images/user.svg',
      path: '/users'
    },
    {
      title: 'To Dos',
      icon: 'assets/images/user.svg',
      path: '/to-dos'
    }
  ];

  constructor(private router: Router) {}

  navigate(path: string): void {
    this.router.navigate([path]).catch(onrejected => {
      alert('Under construction: Unable to go to requested page for now.');
    });
  }
}
