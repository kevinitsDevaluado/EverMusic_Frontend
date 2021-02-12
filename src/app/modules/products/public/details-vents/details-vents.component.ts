import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsConfig } from 'src/app/config/forms-config';
import { itemSaleModels } from 'src/app/models/item-sale/item-sale.models';
import { ProductService } from 'src/app/services/products/product.service';
import { SaleItemService } from 'src/app/services/products/sale-item.service';
declare const initSelect: any;
declare const showMessage: any;
declare const showMessageB: any;
@Component({
  selector: 'app-details-vents',
  templateUrl: './details-vents.component.html',
  styleUrls: ['./details-vents.component.css']
})
export class DetailsVentsComponent implements OnInit {
  fgValidator!: FormGroup;
  recordList!: itemSaleModels;
  constructor(

    private fb: FormBuilder,
    private service: SaleItemService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FillFields();
    this.spinner.show();
  }

  FillFields(){
    let id = this.route.snapshot.params["id"];
    

    this.service.getRecordByIds(id).subscribe(
      data => {
        this.recordList = data;
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

  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('imprimirCompra');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA!, options).then((canvas) => {

      const img = canvas.toDataURL('img/PNG');

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
