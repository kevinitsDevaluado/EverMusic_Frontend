import { Component } from '@angular/core';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]
})
export class AppComponent {
  title = 'OnlineStoreNG';
  // constructor(private customerService: CustomerService){
  //   ngOnInit(){
  //     this.customerService
  //   }
  // }
}
