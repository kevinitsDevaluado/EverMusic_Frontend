import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCreationComponent } from './admin/product-creation/product-creation.component';
import { ProductEditionComponent } from './admin/product-edition/product-edition.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductListHomeComponent } from './public/product-list-home/product-list-home.component';
import { ProductListDetailsComponent } from './public/product-list-details/product-list-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductImagesComponent } from './admin/product-images/product-images.component';
import { ShoopingCardComponent } from './public/shooping-card/shooping-card.component';
import { ProductCuerdaComponent } from './public/product-category/product-cuerda/product-cuerda.component';
import { ProductVientoComponent } from './public/product-category/product-viento/product-viento.component';
import { ProductPersecusionComponent } from './public/product-category/product-persecusion/product-persecusion.component';
import { ProductInstrumentosElectricosComponent } from './public/product-category/product-instrumentos-electricos/product-instrumentos-electricos.component';
import { DowloadShoppingComponent } from './public/dowload-shopping/dowload-shopping.component';
import { DetailsVentsComponent } from './public/details-vents/details-vents.component';
import { ServicesEmployesComponent } from './public/services-employes/services-employes.component';


@NgModule({
  declarations: [ProductCreationComponent, ProductEditionComponent, ProductListComponent, ProductListDetailsComponent,ProductListHomeComponent, ProductImagesComponent, ShoopingCardComponent, ProductCuerdaComponent, ProductVientoComponent, ProductPersecusionComponent, ProductInstrumentosElectricosComponent, DowloadShoppingComponent, DetailsVentsComponent, ServicesEmployesComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ProductListHomeComponent,
    ProductListDetailsComponent
  ]
})
export class ProductsModule { }
