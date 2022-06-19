import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminSeeOrdersComponent } from './admin-see-orders/admin-see-orders.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { CartElementComponent } from './cart-element/cart-element.component';
import { ContainerComponent } from './container/container.component';
import { NavigateProductsComponent } from './navigate-products/navigate-products.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
const routes: Routes = [
  { path: 'cartelement', component: CartElementComponent },
  {
    path: 'productbycategorie/:category',
    component: ProductByCategoryComponent,
  },
  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: 'myaccount', component: UserComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: 'home', component: ContainerComponent },
  { path: 'addproduct', component: AdminAddProductComponent },
  { path: 'seeorders', component: AdminSeeOrdersComponent },
  { path: 'aboutus', component: AboutUsComponent },
  {
    path: 'updateproduct/:_id',
    component: AdminUpdateProductComponent,
  },
  { path: 'adminview', component: AdminViewComponent },
  { path: 'navigateProds', component: NavigateProductsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //Home page will be the default page that shows up if no path was provided, on page load for example.
  { path: 'support', component: SupportComponent },
  { path: 'tickets', component: SupportTicketsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
