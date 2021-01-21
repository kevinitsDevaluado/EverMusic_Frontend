import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CategoryCreationComponent } from './category/category-creation/category-creation.component';
import { CategoryEditionComponent } from './category/category-edition/category-edition.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

import { BrandCreationComponent } from './brand/brand-creation/brand-creation.component';
import { BrandEditionComponent } from './brand/brand-edition/brand-edition.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoryCreationComponent, CategoryEditionComponent, CategoryListComponent, BrandCreationComponent, BrandEditionComponent, BrandListComponent],
  imports: [
    
    CommonModule,
    ParametersRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ParametersModule { }
