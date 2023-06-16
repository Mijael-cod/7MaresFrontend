import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaDto } from 'src/app/models/CategoriaDto.model';
import { Categorias } from 'src/app/models/Categorias.model';
import { MeseroService } from 'src/app/services/mesero.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})


export class CategoriaComponent implements OnInit {

  categorias: Categorias[] = [];

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

  editarCategoria(){
    this.meseroService.editarCategoria
  }

  cambiarPlatillos() {
    this.router.navigate(['/mesero-panel/platillo'])
  }

}
