import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {SidebarModule} from './sidebar/sidebar.module'
import {AccRoute} from './account.route'
import {UserModule} from './user/user.module'
import {SubheaderModule} from './subheader/subheader.module'

@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    AccRoute,
    UserModule,
    SubheaderModule,
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }
