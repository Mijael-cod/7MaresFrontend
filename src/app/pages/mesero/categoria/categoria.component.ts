import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceResponse } from 'src/app/interfaces/ServiceResponse .interface';
import { CategoriaDto } from 'src/app/models/CategoriaDto.model';
import { Categorias } from 'src/app/models/Categorias.model';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClienteDto } from 'src/app/models/ClienteDto.model';
import { PlatillosDto } from 'src/app/models/PlatillosDto.model';
import { MeseroService } from 'src/app/services/mesero.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})


export class CategoriaComponent implements OnInit {

  resultado: any;
  categorias: Categorias[] = [];
  platillosDto: PlatillosDto[] = [];
  categoriaDto: CategoriaDto = new CategoriaDto();
  cliente: Cliente[] = [];
  clientesDto: ClienteDto[] = [];
  clienteDto: ClienteDto = new ClienteDto();

  constructor(private router: Router, private meseroService: MeseroService) { }

  ngOnInit(): void {
    this.listarCategorias();
    this.listarClientePorId();
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

  agregarCategoria(event: Event) {
    this.meseroService.agregarCategoria(this.categoriaDto)
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
        }, error: (err) => {
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
            this.router.navigate(['/mesero-panel/categoria'])
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
          this.router.navigate(['/mesero-panel/categoria'])
        }, error: (err) => {
          console.log(err);
        }
      })
    window.location.reload();
  }

  cambiarPlatillos(idCategoria: number) {

    localStorage.setItem('idCategoria', idCategoria.toString())
    this.router.navigate(['/mesero-panel/platillo'])
  }

  subirIdCategoria(idCat: number) {
    localStorage.setItem('idCat', idCat.toString())
  }


  listarClientePorId() {
    const id = localStorage.getItem('ClienteAgregado');
    this.meseroService.listarClientePorId(+id).subscribe({
      next: (response: any) => {
        this.resultado = response.data;
      },
      error: (error) => {
        console.log(error); // Maneja el error si es necesario
        console.log("error");
      }
    });
    
  }

  agregarCliente(event: Event) {
    const id = localStorage.getItem('id');
    this.meseroService.agregarCliente(this.clienteDto)
      .subscribe({
        next: (resp: any) => {
          const idClienteAgregado = resp.data.idCliente;
          console.log("este es ID  ", +idClienteAgregado)
          localStorage.setItem('ClienteAgregado', idClienteAgregado);
          console.log(resp);
        },
        error: (err) => {
          console.log(err);
          console.log("ERROR")
        }
      });
      window.location.reload();
  }
}

