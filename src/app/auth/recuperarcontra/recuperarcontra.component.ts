import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperarcontra',
  templateUrl: './recuperarcontra.component.html',
  styleUrls: ['./recuperarcontra.component.css']
})
export class RecuperarcontraComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  irPIN() {
    this.router.navigate(['/pin-code'])
  }
}
