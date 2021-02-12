import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { itemSaleModels } from 'src/app/models/item-sale/item-sale.models';
import { ProductImageModel } from 'src/app/models/products/product-image.models';
import { ProductModel } from 'src/app/models/products/product.model';
import { ProductService } from 'src/app/services/products/product.service';
import { SecurityService } from 'src/app/services/security.service';
declare const initSlider: any;
declare const showMessage: any;

@Component({
  selector: 'app-shooping-card',
  templateUrl: './shooping-card.component.html',
  styleUrls: ['./shooping-card.component.css']
})
export class ShoopingCardComponent implements OnInit {

  productId: String;
  productDetails!: ProductModel;
  imagesList: ProductImageModel[] = [];
  productList!: ProductModel[];


  constructor(private route: ActivatedRoute,
    private service: ProductService,
    private secService: SecurityService,
    

    private fb: FormBuilder,
    private router: Router,
    ) { 
      this.productId = this.route.snapshot.params["id"];
    }

  ngOnInit(): void {
    this.getDataOfProduct();
  }

  getDataOfProduct() {
    this.service.getRecordById(this.productId).subscribe(
      data => {
        this.productDetails = data;
        this.imagesList = this.productDetails.images;
        setTimeout(initSlider(),1000);   
        console.log(this.productDetails);
      },
      err => {

      }
    );
  }
  //////////////////////////////////////////// ZONA ITEM
 

 
  
  AddToShoppingCart() {
    let cartId = this.secService.getCartId();
    this.service.addToShoppingCart(cartId, this.productId).subscribe(
      data => {
        
      },
      err => {

      }
    );
  }
  saveItemSale(){
    let model = this.getCustomerData();
    this.service.saleItemShoppingCard(model).subscribe(
      data => {
        console.log(data);
        showMessage('El producto ha sido Agregado a tu carrito de Compras!');
        
      },
      error => {
        
        showMessage('Error al guardar la Información..');
      }
    );
   
  }
  getCustomerData(): itemSaleModels{
    let model = new itemSaleModels();
    
    let anio = new Date().getFullYear();
    let mes = new Date().getMonth();
    let dia = new Date().getDay();

    var str: string = anio.toString()
    var str1: string = mes.toString()
    var str2: string = dia.toString()

    var fecha = str + "-0" +str1 + "-0" + str2  + "T01:24:48.345Z";


    let cartId = this.secService.getCartId();
    model.addedDate = fecha;
    model.price = this.productDetails.price;  
    model.amount = 1;
    model.productId = this.productId;
    model.shoppingCartId = cartId;
    return model;
  }

}
 