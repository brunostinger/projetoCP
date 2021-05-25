import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule
    
    ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
