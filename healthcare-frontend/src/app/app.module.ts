import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicinesListComponent } from './medicines-list/medicines-list.component';
import { AddMedicinesComponent } from './add-medicines/add-medicines.component';
import { FormsModule } from '@angular/forms';
import { EditMedicinesComponent } from './edit-medicines/edit-medicines.component';
import { ViewMedicinesComponent } from './view-medicines/view-medicines.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { AvailableMedicinesComponent } from './available-medicines/available-medicines.component';
import { CartAddComponent } from './cart-add/cart-add.component';
import { CartRemoveComponent } from './cart-remove/cart-remove.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicinesListComponent,
    AddMedicinesComponent,
    EditMedicinesComponent,
    ViewMedicinesComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SignUpComponent,
    LogInComponent,
    AvailableMedicinesComponent,
    CartAddComponent,
    CartRemoveComponent,
    ViewCartComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
