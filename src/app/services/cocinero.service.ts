import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from '../models/VentaDto.model';

@Injectable({
  providedIn: 'root'
})
export class CocineroService {
  endpoint: string = "http://localhost:8082"
  constructor(private http: HttpClient) { }

  listarVentasParaCocinar() {
    return this.http.get<Venta[]>(`${this.endpoint}/negocio/ventas/ListarVentasParaCocinar`);
  }

  listarVentasPlatosCocinados() {
    return this.http.get<Venta[]>(`${this.endpoint}/negocio/ventas/listarVentasPlatosCocinados`);
  }

  listarVentasPlatosPagados() {
    return this.http.get<Venta[]>(`${this.endpoint}/negocio/ventas/listarVentasPlatosPagados`);
  }

  listarVentasLimpiado() {
    return this.http.get<Venta[]>(`${this.endpoint}/negocio/ventas/listarVentasLimpiado`);
  }


}
