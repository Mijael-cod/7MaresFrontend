import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceResponse } from 'src/app/interfaces/ServiceResponse .interface';
import { Platillos } from 'src/app/models/Platillos.model';
import { PlatillosDto } from 'src/app/models/PlatillosDto.model';
import { MeseroService } from 'src/app/services/mesero.service';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {

  platillos: Platillos[] = [];
  platillosDto: PlatillosDto[] = [];
  platilloDto: PlatillosDto = new PlatillosDto();

  constructor(private router: Router, private meseroService: MeseroService) { }

  ngOnInit(): void {
    this.listarPlatillosPorIdDeCategoria();
  }

  listarPlatillosPorIdDeCategoria() {
    const idCategoria = localStorage.getItem('idCategoria');
    this.meseroService.listarPlatillosPorIdCategoria(+idCategoria)
      .subscribe(
        {
          next: (serviceResponse: ServiceResponse) => {
            this.platillosDto = serviceResponse.data
            console.log(this.platillosDto);
          },

        }
      );
  }

  agregarPlatillo(event: Event) {
    const idCategoria = localStorage.getItem('idCategoria');
    this.platilloDto.categorias = +idCategoria;
    this.meseroService.agregarPlatillos(this.platilloDto).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
    window.location.reload();
  }

  editarPlatillo(event: Event) {
    const id = localStorage.getItem("idPlat")
    console.log("entrando");
    this.meseroService
      .editarPlatillo(this.platilloDto, +id)
      .subscribe(
        {
          next: (resp: any) => {
            console.log(resp);
            localStorage.removeItem('idPlat');
            this.router.navigate(['/mesero-panel/platillo'])
          }, error: (err) => {
            console.log(err);
          }
        })
    window.location.reload();
  }

  eliminarPlatillo() {
    const id = localStorage.getItem("idPlat")

    this.meseroService
      .eliminarPlatillo(+id)
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
          localStorage.removeItem('idPlat');
          this.router.navigate(['/mesero-panel/platillo'])
        }, error: (err) => {
          console.log(err);
        }
      })
    window.location.reload();
  }

  subirIdPlatillo(idPlat: number) {
    localStorage.setItem('idPlat', idPlat.toString())
  }

  volverCategorias() {
    localStorage.removeItem('idCategoria');
    this.router.navigate(['/mesero-panel/categoria'])
  }



}
