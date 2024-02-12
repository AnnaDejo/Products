import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'product',component:ProductComponent},  
    {path:'product/:id',component:SingleComponent}  
];
