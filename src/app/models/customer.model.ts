import { UserModel } from "./user.models";

export class CustomerModel{
    id?: String;
    document!: String;
    phone!: String; 
    email!: String; 
    name!: String; 
    lastname!: string; 
    city!: String; 
    address!: String;
    user!: UserModel; 
}