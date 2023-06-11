import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-principal',
  templateUrl: './v-principal.component.html',
  styleUrls: ['./v-principal.component.css']
})
export class VPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
