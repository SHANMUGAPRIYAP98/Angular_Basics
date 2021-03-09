import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildDataComponent } from './childcomponent/child-data/child-data.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildDataComponent,
    ProductsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
