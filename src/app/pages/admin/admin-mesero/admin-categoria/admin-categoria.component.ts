import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaDto } from 'src/app/models/CategoriaDto.model';
import { Categorias } from 'src/app/models/Categorias.model';
import { PlatillosDto } from 'src/app/models/PlatillosDto.model';
import { MeseroService } from 'src/app/services/mesero.service';

@Component({
  selector: 'app-admin-categoria',
  templateUrl: './admin-categoria.component.html',
  styleUrls: ['./admin-categoria.component.css']
})


export class AdminCategoriaComponent implements OnInit {

  categorias: Categorias[] = [];
  platillosDto: PlatillosDto[] = [];
  categoriaDto: CategoriaDto = new CategoriaDto;

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
        console.log(error);
      }
    })
  }

  agregarCategoria(event: Event) {
    this.meseroService.agregarCategoria(this.categoriaDto)
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
        },

        error: (err) => {
          console.log(err);
        }
      })
    window.location.reload();
  }

  editarCategoria(event: Event) {
    const id = localStorage.getItem("idCat")
    console.log("entrando");
    this.meseroService
      .editarCategoria(this.categoriaDto, +id)
      .subscribe(
        {
          next: (resp: any) => {
            console.log(resp);
            localStorage.removeItem('idCat');
            this.router.navigate(['/admin-panel/admin-categoria'])
          }, error: (err) => {
            console.log(err);
          }
        })
    window.location.reload();
  }

  eliminarCategoria() {
    const idCategoria = localStorage.getItem("idCat")

    this.meseroService
      .eliminarCategoria(+idCategoria)
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
          localStorage.removeItem('idCat');
          this.router.navigate(['/admin-panel/admin-categoria'])
        }, error: (err) => {
          console.log(err);
        }
      })
    window.location.reload();
  }

  cambiarAdminPlatillos(idCategoria: number) {

    localStorage.setItem('idCategoria', idCategoria.toString())
    this.router.navigate(['/admin-panel/admin-platillo'])
  }

  subirIdCategoria(idCat: number) {
    localStorage.setItem('idCat', idCat.toString())
  }

}
