import { BrandModel } from "../parameters/brand.model";
import { CategoryModel } from "../parameters/categori.model";
import { ProductModel } from "./product.model";

export class ProductImageModel{
    id?: String;
    path!: String;
    order!: number;
    producto!: ProductModel;
    productoId!: String;
}