import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

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
