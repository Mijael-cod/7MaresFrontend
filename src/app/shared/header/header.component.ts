import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleApiService, UserInfo } from 'src/app/services/google-api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private colapso: HTMLElement;

  title = 'login7mares';

  mailSnippets: string[] = []
  userInfo?: UserInfo

  constructor(
    private readonly googleApi: GoogleApiService,
    private elementRef: ElementRef,
    private router: Router,
  ) {
    googleApi.userProfileSubject.subscribe(info => {
      this.userInfo = info
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }
  

  ngOnInit() {
    this.colapso = this.elementRef.nativeElement.querySelector('#navbarSupportedContent');
  }

  @HostListener('window:click', ['$event.target'])
  cerrarColapso(target: HTMLElement) {
    if (!this.colapso.contains(target)) {
      this.colapso.classList.remove('show');
    }
  }

  irPagosTotal() {
    this.router.navigate(['/admin-panel/pagos-total'])
  }



  irDiagraBarraDiario() {
    this.router.navigate(['/admin-panel/diagra-barras-diario'])
  }
  irDiagraPastelDiario() {
    this.router.navigate(['/admin-panel/diagra-pastel-diario'])
  }



  irDiagraBarraSemanal() {
    this.router.navigate(['/admin-panel/diagra-barras-semanal'])
  }
  irDiagraPastelSemanal() {
    this.router.navigate(['/admin-panel/diagra-pastel-semanal'])
  }



  irDiagraBarraMensual() {
    this.router.navigate(['/admin-panel/diagra-barras-mensual'])
  }
  irDiagraPastelMensual() {
    this.router.navigate(['/admin-panel/diagra-pastel-mensual'])
  }



  irListoCaliente() {
    this.router.navigate(['/admin-panel/listos-caliente'])
  }
  irRecibidoCaliente() {
    this.router.navigate(['/admin-panel/recibidos-caliente'])
  }

  irListoFrio() {
    this.router.navigate(['/admin-panel/listos-frio'])
  }
  irRecibidoFrio() {
    this.router.navigate(['/admin-panel/recibidos-frio'])
  }



  irCategoriaPlatillo() {
    this.router.navigate(['/admin-panel/admin-categoria'])
  }

  irRegistro() {
    this.router.navigate(['/admin-panel/admin-registro'])
  }
}
