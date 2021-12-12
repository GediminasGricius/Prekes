import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  { path:'',component:ProductsComponent },
  { path:'orders', component:OrdersComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
