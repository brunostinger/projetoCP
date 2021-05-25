import { ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { UserComponent } from './user/user.component';

const ACC_ROUTE : Routes = [
    {path: 'user', component : UserComponent}
];

export const AccRoute : ModuleWithProviders<any> = RouterModule.forRoot(ACC_ROUTE);
