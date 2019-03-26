import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatMenuModule,
  MatTabsModule
} from '@angular/material';
import { CustomerDetailsOpenInvoiceComponent } from './customer-details/customer-details-open-invoice/customer-details-open-invoice.component';
import { CustomerDetailsClosedInvoicesComponent } from './customer-details/customer-details-closed-invoices/customer-details-closed-invoices.component';
import { CustomerDetailsCustomerDetailsComponent } from './customer-details/customer-details-customer-details/customer-details-customer-details.component';

const customerRoute: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'list',
    component: CustomerListComponent
  },
  {
    path: 'form/:id',
    component: CustomerFormComponent
  },
  {
    path: 'form',
    component: CustomerFormComponent
  },
  {
    path: 'details/:id',
    component: CustomerDetailsComponent
  }
];

@NgModule({
  declarations: [
    CustomerDetailsComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomerDetailsOpenInvoiceComponent,
    CustomerDetailsClosedInvoicesComponent,
    CustomerDetailsCustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoute),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class CustomerModule {}