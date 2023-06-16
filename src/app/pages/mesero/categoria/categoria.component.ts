import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/models/Categorias.model';
import { MeseroService } from 'src/app/services/mesero.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})


export class CategoriaComponent implements OnInit {

  categorias: Categorias[]=[];

  constructor(private router: Router, private meseroService:MeseroService) { }

  ngOnInit(): void {

   this.listarCategorias(); 
   console.log("hola")

  }

  listarCategorias(){
    console.log("ando dentro gaaa")

    this.meseroService.listarCategorias().subscribe({
      next: (categorias:Categorias[])=>{
        this.categorias=categorias
        console.log(this.categorias)
      },
      error: (error) => {
        console.log(error); // Maneja el error de ser necesario
      }
    })
    
    
  }

  cambiarPlatillos(){
    this.router.navigate(['/mesero-panel/platillo'])
  }

}
