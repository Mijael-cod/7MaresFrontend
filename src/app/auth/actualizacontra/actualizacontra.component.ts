import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizacontra',
  templateUrl: './actualizacontra.component.html',
  styleUrls: ['./actualizacontra.component.css']
})
export class ActualizacontraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irLogin() {
    this.router.navigate(['/login'])
  }
}
