import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css']
})
export class CartAddComponent implements OnInit {

  cart: Cart = new Cart();
  constructor(private cartService: CartService) { }

  saveCart(){
    this.cartService.createCart(this.cart).subscribe(data=>{
      console.log(data);
    }, 
    error => console.log(error));
  }
  ngOnInit(): void {
  }

}
