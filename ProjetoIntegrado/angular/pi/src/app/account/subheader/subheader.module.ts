import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubheaderComponent } from './subheader.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    SubheaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    SubheaderComponent
  ]
})
export class SubheaderModule { }
