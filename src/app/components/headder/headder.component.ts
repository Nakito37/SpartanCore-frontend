import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrl: './headder.component.css'
})
export class HeadderComponent {
  activeButton: string = '';

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.activeButton = path; // Guarda la ruta activa
    this.router.navigate([path]);
  }

}
