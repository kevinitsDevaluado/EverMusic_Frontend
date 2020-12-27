import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsConfig } from 'src/app/config/forms-config';

import { CategoryModel } from 'src/app/models/parameters/categori.model';
import { CategoryService } from 'src/app/services/parameters/category.service';

declare const showMessage: any;
declare const showRemoveConfirmationWindows: any;
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  page: number = 1;
  itemCount: number = FormsConfig.ITEMS_PER_PAGE;
  recordList: CategoryModel[] = [];
  constructor(private service: CategoryService,private spinner: NgxSpinnerService) {

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
  RemoveConfirmation(){
    showRemoveConfirmationWindows();
  }

}
