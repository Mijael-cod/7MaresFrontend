import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-categoria',
  templateUrl: './admin-categoria.component.html',
  styleUrls: ['./admin-categoria.component.css']
})
export class AdminCategoriaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irAdminPlatillo() {
    this.router.navigate(['/admin-panel/admin-platillo'])
  }
  
}
