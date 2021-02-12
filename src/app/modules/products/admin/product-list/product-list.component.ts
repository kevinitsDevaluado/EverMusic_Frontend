import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsConfig } from 'src/app/config/forms-config';
import { ProductModel } from 'src/app/models/products/product.model';
import { ProductService } from 'src/app/services/products/product.service';

declare const showMessage: any;
declare const showRemoveConfirmationWindow: any;
declare const closeAllModal: any;
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  page: number = 1;
  itemCount: number = FormsConfig.ITEMS_PER_PAGE;
  recordList: ProductModel[] = [];
  idToRemove: String = '';
  constructor(
    private service: ProductService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.spinner.show();
    console.log('algo pasa loquitos');
    this.fillRecords();
    this.spinner.show();
  }

  fillRecords() {
    this.service.getAllRecords().subscribe(
      (data) => {
        this.recordList = data;
        console.log(this.recordList);
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 500);
      },
      (error) => {
        showMessage('There os an error with backend communication');
      }
    );
  }
  RemoveConfirmation(id) {
    this.idToRemove = id;
    showRemoveConfirmationWindow();
  }
  RemoveRecord() {
    if (this.idToRemove) {
      this.service.DeleteRecord(this.idToRemove).subscribe(
        (data) => {
          this.idToRemove = '';
          showMessage('Producto Eliminado Correctamente.!!');
          this.fillRecords();
          closeAllModal('RemoveConfirmationModal');
          this.router.navigate(['/parameters/product-list']);
        },
        (error) => {
          showMessage('There os an error with backend communication');
        }
      );
    }
  }
}
