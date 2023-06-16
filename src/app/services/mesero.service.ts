import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../models/Categorias.model';
import { CategoriaDto } from '../models/CategoriaDto.model';

@Injectable({
  providedIn: 'root'
})
export class MeseroService {

  endpoint: string = "http://localhost:8083/negocio/categorias";

  constructor(private http: HttpClient) { }

  listarCategorias() {
    return this.http.get<Categorias[]>(`${this.endpoint}`);
  }

  editarCategoria(categoriaDto: CategoriaDto, id:number){
    return this.http.put<CategoriaDto>(`${this.endpoint}/${id}`, categoriaDto);
  }
  
}