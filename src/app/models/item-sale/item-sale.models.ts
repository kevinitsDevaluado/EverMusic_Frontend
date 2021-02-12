import { CustomerModel } from "../customer.model";
import { ProductModel } from "../products/product.model";
import { ShoppingCartModels } from "./shopping-card.models";

export class itemSaleModels{
    id?: String;
    addedDate!: String;
    price!: number;
    amount!: number;
    productId?: String;
    product! : ProductModel;
    shoppingCartId!: String;
    ShoppingCart! : ShoppingCartModels;
}