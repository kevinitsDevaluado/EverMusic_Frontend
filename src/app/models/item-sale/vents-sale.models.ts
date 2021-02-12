import { ProductModel } from "../products/product.model";
import { itemSaleModels } from "./item-sale.models";

export class VentasModels{
    shoppingCartId!: String;
    addedDate!: String;
    subtotal!: 0.00;
    iva!: 0.00;
    total!: 0.00;
    products: ProductModel[] = [];
}