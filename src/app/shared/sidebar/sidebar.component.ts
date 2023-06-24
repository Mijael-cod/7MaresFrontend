import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  irPagosTotal() {
    this.router.navigate(['/admin-panel/pagos-total'])
  }



  irDiagraBarraDiario() {
    this.router.navigate(['/admin-panel/diagra-barras-diario'])
  }
  irDiagraPastelDiario() {
    this.router.navigate(['/admin-panel/diagra-pastel-diario'])
  }



  irDiagraBarraSemanal() {
    this.router.navigate(['/admin-panel/diagra-barras-semanal'])
  }
  irDiagraPastelSemanal() {
    this.router.navigate(['/admin-panel/diagra-pastel-semanal'])
  }



  irDiagraBarraMensual() {
    this.router.navigate(['/admin-panel/diagra-barras-mensual'])
  }
  irDiagraPastelMensual() {
    this.router.navigate(['/admin-panel/diagra-pastel-mensual'])
  }



  irListoCaliente() {
    this.router.navigate(['/admin-panel/listos-caliente'])
  }
  irRecibidoCaliente() {
    this.router.navigate(['/admin-panel/recibidos-caliente'])
  }

  irListoFrio() {
    this.router.navigate(['/admin-panel/listos-frio'])
  }
  irRecibidoFrio() {
    this.router.navigate(['/admin-panel/recibidos-frio'])
  }



  irCategoriaPlatillo() {
    this.router.navigate(['/admin-panel/admin-categoria'])
  }

  irRegistro() {
    this.router.navigate(['/admin-panel/admin-registro'])
  }


  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}

