import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreHomeComponent } from './pages/store/store-home/store-home.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { StoreHeaderComponent } from './components/store-header/store-header.component';
import { StoreNotificationsComponent } from './components/store-header/store-notifications/store-notifications.component';
import { StoreSearchBarComponent } from './components/store-header/store-search-bar/store-search-bar.component';
import { StoreFiltersComponent } from './components/store-filters/store-filters.component';
import { StoreProductsComponent } from './components/store-products/store-products.component';
import { StoreProductComponent } from './components/store-products/store-product/store-product.component';
import { StoreSliderComponent } from './components/store-slider/store-slider.component';
import { ShoppingCartComponent } from './pages/store/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreHomeComponent,
    NavBarComponent,
    FooterComponent,
    StoreHeaderComponent,
    StoreNotificationsComponent,
    StoreSearchBarComponent,
    StoreFiltersComponent,
    StoreProductsComponent,
    StoreProductComponent,
    StoreSliderComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
