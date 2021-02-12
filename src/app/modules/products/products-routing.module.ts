import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthenticatedGuard } from 'src/app/guards/admin-authenticated.guard';
import { ProductCreationComponent } from './admin/product-creation/product-creation.component';
import { ProductEditionComponent } from './admin/product-edition/product-edition.component';
import { ProductImagesComponent } from './admin/product-images/product-images.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { DetailsVentsComponent } from './public/details-vents/details-vents.component';
import { DowloadShoppingComponent } from './public/dowload-shopping/dowload-shopping.component';
import { ProductCuerdaComponent } from './public/product-category/product-cuerda/product-cuerda.component';
import { ProductInstrumentosElectricosComponent } from './public/product-category/product-instrumentos-electricos/product-instrumentos-electricos.component';
import { ProductPersecusionComponent } from './public/product-category/product-persecusion/product-persecusion.component';
import { ProductVientoComponent } from './public/product-category/product-viento/product-viento.component';
import { ProductListDetailsComponent } from './public/product-list-details/product-list-details.component';
import { ProductListHomeComponent } from './public/product-list-home/product-list-home.component';
import { ServicesEmployesComponent } from './public/services-employes/services-employes.component';
import { ShoopingCardComponent } from './public/shooping-card/shooping-card.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-home-list',
    component: ProductListHomeComponent
  },
  {
    path: 'product-creation',
    component: ProductCreationComponent,
    canActivate: [AdminAuthenticatedGuard]
  },
  {
    path: 'product-edition/:id',
    component: ProductEditionComponent,
    canActivate: [AdminAuthenticatedGuard]
  },
  {
    path: 'product-images/:id',
    component: ProductImagesComponent,
    canActivate: [AdminAuthenticatedGuard]
  },
  {
    path: 'product-details/:id',
    component: ProductListDetailsComponent
  },
  {
    path: 'details-vents/:id',
    component: DetailsVentsComponent
  },
  {
    path: 'shopping-card/:id',
    component: ShoopingCardComponent
  },
  {
    path: 'product-category-cuerda',
    component: ProductCuerdaComponent
  },
  {
    path: 'product-category-viento',
    component: ProductVientoComponent
  },
  {
    path: 'product-category-persecusion',
    component: ProductPersecusionComponent
  },
  {
    path: 'product-category-instrumentos-electricos',
    component: ProductInstrumentosElectricosComponent
  },
  {
    path: 'dowload-shopping',
    component: DowloadShoppingComponent
  },
  {
    path: 'services-employes',
    component: ServicesEmployesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
