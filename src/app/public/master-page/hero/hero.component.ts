import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';


declare const initSliderImagen: any;



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  isLogged?: Boolean = false;
  subscription: Subscription = new Subscription;
  
  constructor(private service: SecurityService) { 
    this.subscription = this.service.getUserData().subscribe(data => {
      this.isLogged = data.isLogged;
    });
  }

  ngOnInit(): void {
    
  }

}
