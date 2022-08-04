import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddMedicinesComponent } from './add-medicines/add-medicines.component';
import { AvailableMedicinesComponent } from './available-medicines/available-medicines.component';
import { CartAddComponent } from './cart-add/cart-add.component';
import { ContactComponent } from './contact/contact.component';
import { EditMedicinesComponent } from './edit-medicines/edit-medicines.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { MedicinesListComponent } from './medicines-list/medicines-list.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewMedicinesComponent } from './view-medicines/view-medicines.component';

const routes: Routes = [
  {path: 'medicines', component: MedicinesListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'add-medicines', component: AddMedicinesComponent},
  {path: 'edit-medicines/:id', component: EditMedicinesComponent},
  {path: 'view-medicines/:id', component: ViewMedicinesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'available-medicines', component: AvailableMedicinesComponent},
  {path: 'cart-add/:id', component: CartAddComponent},
  {path: 'view-cart/:id', component: ViewCartComponent},
  {path: 'order-summary', component: OrderSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
