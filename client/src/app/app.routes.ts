import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { PromosComponent } from './components/promos/promos.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminPromosComponent } from './components/admin-promos/admin-promos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'promos', component: PromosComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/promos', component: AdminPromosComponent },
  { path: '**', redirectTo: '' }
];
