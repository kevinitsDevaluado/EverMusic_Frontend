import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsConfig } from 'src/app/config/forms-config';
import { itemSaleModels } from 'src/app/models/item-sale/item-sale.models';
import { SaleItemService } from 'src/app/services/products/sale-item.service';
import { SecurityService } from 'src/app/services/security.service';

declare const showMessage: any;
declare const showRemoveConfirmationWindow: any;
declare const closeAllModal: any;
@Component({
  selector: 'app-dowload-shopping',
  templateUrl: './dowload-shopping.component.html',
  styleUrls: ['./dowload-shopping.component.css']
})
export class DowloadShoppingComponent implements OnInit {

  page: number = 1;
  itemCount: number = FormsConfig.ITEMS_PER_PAGE;
  recordList: itemSaleModels[] = [];

  record: itemSaleModels[] = [];
  idToRemove: String = '';
  constructor(
    private service: SaleItemService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private secService: SecurityService,

    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.spinner.show();
    console.log('algo pasa loquitos');
    //this.fillRecords();
    this.FillFields();
    this.spinner.show();
  }

  FillFields(){
   
    
    let id = this.secService.getCartId();
    console.log('este es el id'+ id);

    this.service.getRecordByIdShopping(id).subscribe(
      data => {
        this.record = data;
        console.log(data);   

        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 500);
      },
      err => {
        showMessage("Record not found.");
        this.router.navigate(["/products/product-list"]);
      }
    );
  }

  fillRecords() {

    this.service.getAllRecordShopping().subscribe(
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

  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('imprimirCompra');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA!, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }
  
}
