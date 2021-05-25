import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class UserModule { }
