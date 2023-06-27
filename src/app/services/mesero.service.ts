import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../models/Categorias.model';
import { CategoriaDto } from '../models/CategoriaDto.model';
import { PlatillosDto } from '../models/PlatillosDto.model';
import { ServiceResponse } from '../interfaces/ServiceResponse .interface';
import { Observable } from 'rxjs';
import { ClienteDto } from '../models/ClienteDto.model';

@Injectable({
  providedIn: 'root'
})
export class MeseroService {

  endpoint: string = "http://localhost:8891";  
  endpointMSCliente: string = "/ms-ventas-gestion-clientes/negocio";
  endpointCliente: string = "http://localhost:8081/negocio"
  endpointMSPlatillos: string = "/ms-ventas-gestion-platillos/negocio";
  endpointPlatillos: string = "http://localhost:8083/negocio"

  constructor(private http: HttpClient) { }

  listarCategorias() {
    return this.http.get<Categorias[]>(`${this.endpoint}${this.endpointMSPlatillos}/categorias/listarCategorias`);
  }

  agregarCategoria(categoriaDto: CategoriaDto) {
    return this.http.post(`${this.endpointPlatillos}/categorias/agregarCategorias`, categoriaDto);
  }
 
 
  editarCategoria(categoriaDto: CategoriaDto, id: number) {
    return this.http.put<CategoriaDto>(`${this.endpointPlatillos}/categorias/editarCategoria/${id}`, categoriaDto);
  }

  eliminarCategoria(idCategoria: number) {
    return this.http.delete(`${this.endpointPlatillos}/categorias/eliminarCategoria/${idCategoria}`)
  }







  listarPlatillosPorIdCategoria(idCategoria: number) {
    return this.http.get(`${this.endpoint}${this.endpointMSPlatillos}/platillos/listarPlatillosPorIdDeCategoria/${idCategoria}`);
  }

  agregarPlatillos(platillosDto: PlatillosDto) {
    return this.http.post(`${this.endpointPlatillos}/platillos/agregarPlatillos`, platillosDto)
  }

  editarPlatillo(platillosDto: PlatillosDto, id: number) {
    return this.http.put<PlatillosDto>(`${this.endpointPlatillos}/platillos/editarPlatillo/${id}`, platillosDto);
  }

  eliminarPlatillo(idPlatillo: number){
    return this.http.delete(`${this.endpointPlatillos}/platillos/eliminarPlatillo/${idPlatillo}`)
  }




  agregarCliente(clienteDto: ClienteDto){
    return this.http.post(`${this.endpointCliente}/clientes/agregarClientes`, clienteDto)
  }

  listarClientePorId(idClienteAgregado: number) {
    return this.http.get(`${this.endpointCliente}/clientes/listarClientePorId/${idClienteAgregado}`);
  }

}