import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { itemSaleModels } from 'src/app/models/item-sale/item-sale.models';
import { ShoppingCartModels } from 'src/app/models/item-sale/shopping-card.models';
import { ProductService } from 'src/app/services/products/product.service';
import { SecurityService } from 'src/app/services/security.service';

declare const initSlider: any;
declare const showMessage: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ShoppingCardList: itemSaleModels[] = [];
  isLogged?: Boolean = false;
  role: number=0;
  subscription: Subscription = new Subscription;

  constructor(private service: SecurityService,private router: Router,private route: ActivatedRoute,
    private serviceShopping: ProductService) { }

  ngOnInit(): void {
    this.subscription = this.service.getUserData().subscribe(data => {
      this.isLogged = data.isLogged;
    });
  }
  getAllProducts() {
    this.serviceShopping.getAllRecordShopping().subscribe(
      data => {
        this.ShoppingCardList = data;
      },
      err => {
        showMessage("Error loading current images of product.");
      }
    );
  }
  OpenDetails(id){
    this.router.navigate([`/products/shopping-card/${id}`]);
  }


}
