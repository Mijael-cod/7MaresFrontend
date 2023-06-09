import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irRecuperarContra() {
    this.router.navigate(['/recuperar-contra'])
  }

  irAdminPanel(){
    this.router.navigate(['/admin-panel'])
  }

}
