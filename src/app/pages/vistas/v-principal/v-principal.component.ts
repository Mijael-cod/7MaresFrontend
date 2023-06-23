import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-v-principal',
  templateUrl: './v-principal.component.html',
  styleUrls: ['./v-principal.component.css']
})
export class VPrincipalComponent implements OnInit {

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  irLogin() {
    this.router.navigate(['/login'])
  }

  
  seccion1() {
    const seccion1 = this.elementRef.nativeElement.querySelector('#s1');
    seccion1.scrollIntoView({ behavior: 'smooth' });
  }

  seccion2() {
    const seccion1 = this.elementRef.nativeElement.querySelector('#s2');
    seccion1.scrollIntoView({ behavior: 'smooth' });
  }

  seccion3() {
    const seccion1 = this.elementRef.nativeElement.querySelector('#s3');
    seccion1.scrollIntoView({ behavior: 'smooth' });
  }

  seccion4() {
    const seccion1 = this.elementRef.nativeElement.querySelector('#s4');
    seccion1.scrollIntoView({ behavior: 'smooth' });
  }
  
  seccion5() {
    const seccion1 = this.elementRef.nativeElement.querySelector('#s5');
    seccion1.scrollIntoView({ behavior: 'smooth' });
  }
}


document.addEventListener('click', (event: Event) => {
  const target = event.target as HTMLElement;
  const navbarCollapse = document.getElementById('navbarCollapse');
  const navbarToggle = document.querySelector('[data-bs-toggle="collapse"]');
  const isInsideNavbarCollapse = navbarCollapse?.contains(target);
  
  if (!isInsideNavbarCollapse && !target.isSameNode(navbarToggle)) {
    const isExpanded = navbarCollapse?.classList.contains('show');
    if (isExpanded) {
      navbarCollapse?.classList.remove('show');
    }
  }
});
