import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminSeeOrdersComponent } from './admin-see-orders/admin-see-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartElementComponent } from './cart-element/cart-element.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavigateProductsComponent } from './navigate-products/navigate-products.component';
import { BeautyComponent } from './navigate-products/beauty/beauty.component';
import { ElectronicsComponent } from './navigate-products/electronics/electronics.component';
import { HomeAndGardenComponent } from './navigate-products/home-and-garden/home-and-garden.component';
import { JewerlyWatchesComponent } from './navigate-products/jewerly-watches/jewerly-watches.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { OneOrderComponent } from './one-order/one-order.component';
import { OneOrderProductComponent } from './one-order-product/one-order-product.component';
import { OneProductComponent } from './one-product/one-product.component';
import { SupportComponent } from './support/support.component';
import { AdminSupportComponent } from './admin-support/admin-support.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { AboutUsHeadComponent } from './about-us-head/about-us-head.component';
import { AboutUsTestimonialComponent } from './about-us-testimonial/about-us-testimonial.component';
import { AboutUsTrustedByComponent } from './about-us-trusted-by/about-us-trusted-by.component';
import { AboutUsTopQualityComponent } from './about-us-top-quality/about-us-top-quality.component';
import { AboutUsWhyComponent } from './about-us-why/about-us-why.component';
import { UserEditComponent } from './user-edit/user-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SidebarComponent,
    ContainerComponent,

    AdminViewComponent,
    AdminAddProductComponent,
    AdminUpdateProductComponent,
    AdminSeeOrdersComponent,

    ShoppingCartComponent,
    CartElementComponent,
    ProductByCategoryComponent,
    UserComponent,
    LoginComponent,
    SignUpComponent,
    NavigateProductsComponent,
    BeautyComponent,
    ElectronicsComponent,
    HomeAndGardenComponent,
    JewerlyWatchesComponent,
    ProductDetailComponent,
    AboutUsComponent,
    OneOrderComponent,
    OneOrderProductComponent,
    OneProductComponent,
    SupportComponent,
    AdminSupportComponent,
    SupportTicketsComponent,
    AboutUsHeadComponent,
    AboutUsTestimonialComponent,
    AboutUsTrustedByComponent,
    AboutUsTopQualityComponent,
    AboutUsWhyComponent,
    UserEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
