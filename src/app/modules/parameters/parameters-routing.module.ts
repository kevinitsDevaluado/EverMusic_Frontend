import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandCreationComponent } from './brand/brand-creation/brand-creation.component';
import { BrandEditionComponent } from './brand/brand-edition/brand-edition.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { CategoryCreationComponent } from './category/category-creation/category-creation.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

const routes: Routes = [
  {
    path:'category-list',
    component: CategoryListComponent
  },
  {
    path:'category-creation',
    component: CategoryCreationComponent
  },
  {
    path:'category-edition',
    component: CategoryCreationComponent
  },
  {
    path:'category-remove',
    component: CategoryCreationComponent
  },
  {
    path:'brand-list',
    component: BrandListComponent
  },
  {
    path:'brand-creation',
    component: BrandCreationComponent
  },
  {
    path:'brand-edition',
    component: BrandEditionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
