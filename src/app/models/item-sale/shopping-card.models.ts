import { CustomerModel } from "../customer.model";

export class ShoppingCartModels{
    id?: String;
    createdDate!: Date;
    code?: String;
    customerId!: String;
    customer!: CustomerModel;

}