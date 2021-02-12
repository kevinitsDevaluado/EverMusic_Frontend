import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsConfig } from 'src/app/config/forms-config';

import { CategoryModel } from 'src/app/models/parameters/categori.model';
import { CategoryService } from 'src/app/services/parameters/category.service';

declare const showMessage: any;
declare const showRemoveConfirmationWindow: any;
declare const closeAllModal: any;
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  page: number = 1;
  itemCount: number = FormsConfig.ITEMS_PER_PAGE;
  recordList: CategoryModel[] = [];
  idToRemove: String = '';
    constructor(
      private service: CategoryService,
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
          showMessage("Categoria Eliminada Correctamente.!!");
          this.fillRecords();
          closeAllModal('RemoveConfirmationModal');
          this.router.navigate(['/parameters/category-list']);
        },
        error => {
          showMessage("There os an error with backend communication");
        }
      ); 
    }
  }

}
