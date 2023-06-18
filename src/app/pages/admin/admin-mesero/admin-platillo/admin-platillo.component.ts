import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-platillo',
  templateUrl: './admin-platillo.component.html',
  styleUrls: ['./admin-platillo.component.css']
})
export class AdminPlatilloComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volverAdminCategoria() {
    this.router.navigate(['/admin-panel/admin-categoria'])
  }
}
