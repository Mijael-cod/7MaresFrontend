import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceResponse } from 'src/app/interfaces/ServiceResponse .interface';
import { PlatillosDto } from 'src/app/models/PlatillosDto.model';
import { MeseroService } from 'src/app/services/mesero.service';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {

  platillosDto: PlatillosDto[] = [];

  constructor(private router: Router, private meseroService: MeseroService) { }

  ngOnInit(): void {
     this.listarPlatillosPorIdDeCategoria();
  }

  listarPlatillosPorIdDeCategoria() {
    const idCategoria = localStorage.getItem('idCategoria');
    this.meseroService
      .listarPlatillosPorIdCategoria(+idCategoria)
      .subscribe((response: ServiceResponse) => {
        this.platillosDto = response.data;
        console.log(this.platillosDto);
      });
  }

  volverCategorias() {
    localStorage.removeItem('idCategoria');
    this.router.navigate(['/mesero-panel/categoria'])
  }

}
