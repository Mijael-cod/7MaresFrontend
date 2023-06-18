import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volverCategorias() {
    this.router.navigate(['/mesero-panel/categoria'])
  }

}
