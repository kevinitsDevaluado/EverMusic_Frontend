import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductImageModel } from 'src/app/models/products/product-image.models';
import { BrandService } from 'src/app/services/parameters/brand.service';
import { CategoryService } from 'src/app/services/parameters/category.service';
import { ProductImagesService } from 'src/app/services/products/product-images.service';
import { ProductService } from 'src/app/services/products/product.service';

declare const initSelect: any;
declare const showMessage: any;
declare const closeAllModal: any;


declare const showRemoveConfirmationWindow: any;
@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {

  fgValidator!: FormGroup;
  productId!: String;
  imagesList: ProductImageModel[] = [];
  idToRemove!: String;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ProductImagesService) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.productId = this.route.snapshot.params["id"];
    this.fgv.productId.setValue(this.productId);
    this.getAllImagesByProductId();
  }

  getAllImagesByProductId() {
    this.service.getRecordsByProductId(this.productId).subscribe(
      data => {
        this.imagesList = data;
      },
      err => {
        showMessage("Error loading current images of product.");
      }
    );
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      path: ['', [Validators.required]],
      order: ['', [Validators.required]],
      productId: ['', [Validators.required]]
    });
  }

  UploadImageFn() {
    if (this.fgValidator.invalid) {
      showMessage("Invalid Form.");
    } else {
      const formData = new FormData();
      formData.append('file', this.fgv.path.value);
      this.service.UploadProductImage(formData, this.fgv.order.value, this.fgv.productId.value).subscribe(
        data => {
          this.fgv.path.setValue(data.filename);
          showMessage("The image was uploaded successfuly.");
          this.getAllImagesByProductId();
        },
        err => {
          showMessage("Error uploading image.");
        }
      );
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fgv.path.setValue(file);
    }
  }

  get fgv() {
    return this.fgValidator.controls;
  }


  RemoveConfirmation(id) {
    this.idToRemove = id;
    showRemoveConfirmationWindow();
  }


  RemoveImage() {
    this.service.DeleteRecord(this.idToRemove).subscribe(
      data => {
        this.getAllImagesByProductId();
        closeAllModal('RemoveConfirmationModal');
      },
      err => {
        showMessage("Error removing that image.");
      }
    );
  }

}
