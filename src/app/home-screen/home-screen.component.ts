import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  imports: [],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent {
  constructor(private router: Router) { }
  navigateToComponent(component: string) {
    this.router.navigate([component]);
  }
}
