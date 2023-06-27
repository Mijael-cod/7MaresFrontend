import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceResponse, ServiceResponseCliente } from 'src/app/interfaces/ServiceResponse .interface';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClienteDto } from 'src/app/models/ClienteDto.model';
import { Platillos } from 'src/app/models/Platillos.model';
import { PlatillosDto } from 'src/app/models/PlatillosDto.model';
import { MeseroService } from 'src/app/services/mesero.service';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {

  resultado: any;
  cliente: Cliente[] = [];
  clientesDto: ClienteDto[] = [];
  clienteDto: ClienteDto = new ClienteDto();
  platillos: Platillos[] = [];
  platillosDto: PlatillosDto[] = [];
  platilloDto: PlatillosDto = new PlatillosDto();
  nombrePlatillo: string;
  costoPlatillo: number;
  opcionesSeleccionadas: any[] = [];
  etiquetasGeneradas: any[] = [];

  constructor(private router: Router, private meseroService: MeseroService) { }

  ngOnInit(): void {
    this.listarPlatillosPorIdDeCategoria();
    this.listarClientePorId();
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

  mostrarDatos(nombrePlatillo: string, costoPlatillo: number) {

    this.nombrePlatillo = nombrePlatillo;
    this.costoPlatillo = costoPlatillo;
  }

  agregarEtiqueta(nombrePlatillo: string, costoPlatillo: number) {
    const etiqueta = {
      nombrePlatillo: nombrePlatillo,
      costoPlatillo: costoPlatillo
    };

    this.etiquetasGeneradas.push(etiqueta);
  }

  eliminarEtiqueta(etiqueta: any) {
    const index = this.etiquetasGeneradas.indexOf(etiqueta);
    if (index !== -1) {
      this.etiquetasGeneradas.splice(index, 1);
    }
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
