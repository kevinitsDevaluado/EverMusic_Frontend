import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsConfig } from 'src/app/config/forms-config';
import { BrandModel } from 'src/app/models/parameters/brand.model';

import { BrandService } from 'src/app/services/parameters/brand.service';

declare const showMessage: any;
declare const showRemoveConfirmationWindow: any;
declare const closeAllModal: any;
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  page: number = 1;
  itemCount: number = FormsConfig.ITEMS_PER_PAGE;
  recordList: BrandModel[] = [];
  idToRemove: String = '';
    constructor(
      private service: BrandService,
      private spinner: NgxSpinnerService,
      private router: Router,
       
      ) {

   }

  ngOnInit(): void {
   this.fillRecords();
   this.spinner.show();

  }

  fillRecords(){
    this.service.getAllRecords().subscribe(
      data => {
        this.recordList = data;
        console.log(this.recordList);
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 500);
      },
      error => {
        showMessage("There os an error with backend communication");
        
      }
    );
  }
  RemoveConfirmation(id){
    this.idToRemove = id;
    showRemoveConfirmationWindow();
  }
  RemoveRecord(){
    //closeModal('RemoveConfirmationModal');
    if (this.idToRemove) {
      this.service.DeleteRecord(this.idToRemove).subscribe(
        data => {
          this.idToRemove = '';
          showMessage("Marca Eliminada Correctamente.!!");
          this.fillRecords();
          closeAllModal('RemoveConfirmationModal');
          this.router.navigate(['/parameters/brand-list']);
        },
        error => {
          showMessage("There os an error with backend communication");
        }
      ); 
    }
  }

}

