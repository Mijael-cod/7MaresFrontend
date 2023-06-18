import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceResponse } from 'src/app/interfaces/ServiceResponse .interface';
import { CategoriaDto } from 'src/app/models/CategoriaDto.model';
import { Categorias } from 'src/app/models/Categorias.model';
import { PlatillosDto } from 'src/app/models/PlatillosDto.model';
import { MeseroService } from 'src/app/services/mesero.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})


export class CategoriaComponent implements OnInit {

  categorias: Categorias[] = [];
  platillosDto: PlatillosDto[] = [];

  categoriaDto: CategoriaDto = new CategoriaDto();

  constructor(private router: Router, private meseroService: MeseroService) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias() {
    this.meseroService.listarCategorias().subscribe({
      next: (response: any) => {
        this.categorias = response.data;
      },
      error: (error) => {
        console.log(error); // Maneja el error de ser necesario
      }
    })
  }

  editarCategoria() {
    this.meseroService.editarCategoria
  }



  cambiarPlatillos(idCategoria: number) {

    localStorage.setItem('idCategoria', idCategoria.toString())
    this.router.navigate(['/mesero-panel/platillo'])
  }

  


}
