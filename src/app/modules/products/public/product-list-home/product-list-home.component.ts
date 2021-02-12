import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductImageModel } from 'src/app/models/products/product-image.models';
import { ProductModel } from 'src/app/models/products/product.model';
import { ProductImagesService } from 'src/app/services/products/product-images.service';
import { ProductService } from 'src/app/services/products/product.service';
declare const initSelect: any;
declare const showMessage: any;

declare const showRemoveConfirmationWindow: any;
@Component({
  selector: 'app-product-list-home',
  templateUrl: './product-list-home.component.html',
  styleUrls: ['./product-list-home.component.css']
})
export class ProductListHomeComponent implements OnInit {
  fgValidator!: FormGroup;
  productId!: String;
  imagesList: ProductModel[] = [];
  listaNumero!: ProductModel;
  idToRemove!: String;
  numero!: number;

  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
   }

  ngOnInit(): void {
    this.getAllCuerda();
  }
  

  getAllCuerda() {
    this.service.getAllRecords().subscribe(
      data => {
        this.imagesList = data;
      },
      err => {
        showMessage("Error loading current images of product.");
      }
    );
  }

  OpenDetails(id){
    this.router.navigate([`/products/product-details/${id}`]);
  }

}
