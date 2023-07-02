import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/models/VentaDto.model';
import { CocineroService } from 'src/app/services/cocinero.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  ventas: Venta[] = [];

  constructor(private router: Router, private cocineroService: CocineroService) { }

  ngOnInit(): void {
    this.listarVentasParaCocinar();
  }

  listarVentasParaCocinar() {
    this.cocineroService.listarVentasParaCocinar().subscribe({
      next: (response: any) => {
        this.ventas = response.data;
        console.log(response);
      },
      error: (error) => {
        console.log(error); // Maneja el error de ser necesario
      }
    })
  }
}
