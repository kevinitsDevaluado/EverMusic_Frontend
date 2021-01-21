import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreationComponent } from './admin/product-creation/product-creation.component';
import { ProductEditionComponent } from './admin/product-edition/product-edition.component';
import { ProductImagesComponent } from './admin/product-images/product-images.component';
import { ProductListComponent } from './admin/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-creation',
    component: ProductCreationComponent
  },
  {
    path: 'product-edition/:id',
    component: ProductEditionComponent
  },
  {
    path: 'product-images/:id',
    component: ProductImagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
