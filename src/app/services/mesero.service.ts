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

  editarCategoria(categoriaDto: CategoriaDto, id: number) {
    return this.http.put<CategoriaDto>(`${this.endpoint}/${id}`, categoriaDto);
  }

  listarPlatillosPorIdCategoria(idCategoria: number) {
    return this.http.get(`${this.endpoint}/platillos/listarPlatillosPorIdDeCategoria/${idCategoria}`);
  }

}