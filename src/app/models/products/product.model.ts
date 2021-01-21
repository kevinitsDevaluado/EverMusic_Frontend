import { BrandModel } from "../parameters/brand.model";
import { CategoryModel } from "../parameters/categori.model";

export class ProductModel{
    id?: String;
    code!: String;
    name!: String; 
    price!: number; 
    description!: String; 
    stock!: number; 
    rate!: number; 
    categoryId!: String; 
    brandId!: String; 
    brand!: BrandModel;
    category!: CategoryModel;
}