//npm dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//app-component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { StoreHeaderComponent } from './components/store/shared/store-header/store-header.component';
import { StoreNotificationsComponent } from './components/store/shared/store-header/store-notifications/store-notifications.component';
import { StoreSearchBarComponent } from './components/store/shared/store-header/store-search-bar/store-search-bar.component';
import { StoreFiltersComponent } from './components/store/store-filters/store-filters.component';
import { StoreFilterComponent } from './components/store/store-filters/store-filter/store-filter.component';
import { StoreProductsComponent } from './components/store/store-products/store-products.component';
import { StoreProductComponent } from './components/store/store-products/store-product/store-product.component';
import { StoreSliderComponent } from './components/store/store-slider/store-slider.component';
import { StoreNotificationShoppingCartComponent } from "./components/store/shared/store-header/store-notifications/store-notification-shopping-cart/store-notification-shopping-cart.component";

//pages
import { StoreComponent } from './pages/store/store.component';
import { StoreHomeComponent } from './pages/store/store-home/store-home.component';
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
    ShoppingCartComponent,
    StoreComponent,
    StoreFilterComponent,    
    StoreNotificationShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
