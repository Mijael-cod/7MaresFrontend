import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.css']
})
export class PincodeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  irActualizarContra() {
    this.router.navigate(['/actualizar-contra'])
  }
}
