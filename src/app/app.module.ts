import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { ProductService } from './product/product.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductListComponent } from './product/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    routingComponents,


  ],
  imports: [
    BrowserModule,
    FormsModule,

    Ng2SearchPipeModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
