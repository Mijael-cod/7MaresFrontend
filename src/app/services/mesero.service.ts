import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../models/Categorias.model';
import { CategoriaDto } from '../models/CategoriaDto.model';
import { PlatillosDto } from '../models/PlatillosDto.model';
import { ServiceResponse } from '../interfaces/ServiceResponse .interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeseroService {

  endpoint: string = "http://localhost:8083/negocio";

  constructor(private http: HttpClient) { }

  listarCategorias() {
    return this.http.get<Categorias[]>(`${this.endpoint}/categorias/listarCategorias`);
  }

  agregarCategoria(categoriaDto: CategoriaDto) {
    return this.http.post(`${this.endpoint}/categorias/agregarCategorias`, categoriaDto)
  }

  editarCategoria(categoriaDto: CategoriaDto, id: number) {
    return this.http.put<CategoriaDto>(`${this.endpoint}/categorias/editarCategoria/${id}`, categoriaDto);
  }

  eliminarCategoria(idCategoria: number) {
    return this.http.delete(`${this.endpoint}/categorias/eliminarCategoria/${idCategoria}`)
  }




  listarPlatillosPorIdCategoria(idCategoria: number) {
    return this.http.get(`${this.endpoint}/platillos/listarPlatillosPorIdDeCategoria/${idCategoria}`);
  }

  agregarPlatillos(platillosDto: PlatillosDto) {
    return this.http.post(`${this.endpoint}/platillos/agregarPlatillos`, platillosDto)
  }

  editarPlatillo(platillosDto: PlatillosDto, id: number) {
    return this.http.put<PlatillosDto>(`${this.endpoint}/platillos/editarPlatillo/${id}`, platillosDto);
  }

  eliminarPlatillo(idPlatillo: number){
    return this.http.delete(`${this.endpoint}/platillos/eliminarPlatillo/${idPlatillo}`)
  }
}