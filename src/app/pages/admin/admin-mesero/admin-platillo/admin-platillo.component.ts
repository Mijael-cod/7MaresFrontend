import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceResponse } from 'src/app/interfaces/ServiceResponse .interface';
import { PlatillosDto } from 'src/app/models/PlatillosDto.model';
import { MeseroService } from 'src/app/services/mesero.service';

@Component({
  selector: 'app-admin-platillo',
  templateUrl: './admin-platillo.component.html',
  styleUrls: ['./admin-platillo.component.css']
})
export class AdminPlatilloComponent implements OnInit {
  
  platillosDto: PlatillosDto[] = [];

  constructor(private router: Router, private meseroService: MeseroService) { }

  ngOnInit(): void {
    this.listarPlatillosPorIdDeCategoria();
  }

  listarPlatillosPorIdDeCategoria() {
    const idCategoria = localStorage.getItem('idCategoria');
    this.meseroService
      .listarPlatillosPorIdCategoria(+idCategoria)
      .subscribe(
        {
          next: (serviceResponse: ServiceResponse) => {
            this.platillosDto = serviceResponse.data
            console.log(this.platillosDto);
          }
        }
      );
  }

  volverAdminCategoria() {
    localStorage.removeItem('idCategoria');
    this.router.navigate(['/admin-panel/admin-categoria'])
  }
}
