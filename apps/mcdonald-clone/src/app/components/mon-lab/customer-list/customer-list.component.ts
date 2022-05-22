import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'mon-nx-monorepo-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent  {

  selectedCustomer: any
  customers: Customer[] = [
    {customerNo: 1, name: 'john', address: '1 rue de la pin', city: 'lyon', country: 'france'},
    {customerNo: 2, name: 'jambon', address: '1 rue de la pin', city: 'lyon', country: 'france'},
    {customerNo: 3, name: 'saucisse', address: '1 rue de la pin', city: 'lyon', country: 'france'},
    {customerNo: 4, name: 'volaille', address: '1 rue de la pin', city: 'lyon', country: 'france'},
    {customerNo: 5, name: 'planete', address: '1 rue de la pin', city: 'lyon', country: 'france'},
    {customerNo: 6, name: 'sable', address: '1 rue de la pin', city: 'lyon', country: 'france'},
    {customerNo: 7, name: 'pierre', address: '1 rue de la pin', city: 'lyon', country: 'france'},
  ]



}
