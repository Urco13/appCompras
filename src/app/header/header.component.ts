import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autenticacionService: AutenticacionService,
              private router: Router,
              private activatedRouter: ActivatedRoute ) { }

  ngOnInit() {
  }

  isAtuth(){
    return this.autenticacionService.isAuthenticated();
  }

  onLogout(){

    this.autenticacionService.logout();
    this.router.navigate(['/inicio']);
  }
}
