import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-available-medicines',
  templateUrl: './available-medicines.component.html',
  styleUrls: ['./available-medicines.component.css']
})
export class AvailableMedicinesComponent implements OnInit {

  medicines: Medicines[] = [];

  id: number=0;
  cart: Cart = new Cart();
  constructor(private medicinesService: MedicinesService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMedicines();
    this.id=this.route.snapshot.params['id'];
    this.cart = new Cart();
    this.cartService.getCartById(this.id).subscribe(data =>{
      this.cart = data;
    })
  }
  private getMedicines(){
    this.medicinesService.getMedicinesList().subscribe(data => {
      this.medicines = data;
    })
  }
  cartAdd(id: number){
    this.saveCart();
    this.router.navigate(['cart-add', id]);
  }
  viewCart(id: number){
    this.router.navigate(['view-cart',id]);
  }
  viewMedicines(id: number){
    this.router.navigate(['view-medicines', id]);
  }
  saveCart(){
    this.cartService.createCart(this.cart).subscribe(data=>{
      console.log(data);
    }, 
    error => console.log(error));
  }

}


