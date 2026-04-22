import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { NgFor, NgIf, CurrencyPipe, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe, AsyncPipe, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  total = 0;
  checkoutData = {
    name: '',
    email: '',
    address: ''
  };
  isCheckout = false;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.cartItems$ = this.cartService.getCart();
  }

  ngOnInit(): void {
    this.cartItems$.subscribe(() => {
      this.total = this.cartService.getTotal();
    });
  }

  updateQuantity(productId: string, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  toggleCheckout(): void {
    this.isCheckout = !this.isCheckout;
  }

  placeOrder(): void {
    this.cartItems$.subscribe(items => {
      if (items.length === 0) return;

      const order = {
        items: items.map(item => ({
          productId: item.product._id!,
          quantity: item.quantity,
          price: item.product.price
        })),
        totalAmount: this.total,
        customerName: this.checkoutData.name,
        customerEmail: this.checkoutData.email,
        address: this.checkoutData.address
      };

      this.orderService.createOrder(order).subscribe({
        next: () => {
          alert('Order placed successfully!');
          this.cartService.clearCart();
          this.router.navigate(['/']);
        },
        error: (err) => {
          alert('Error placing order: ' + err.message);
        }
      });
    }).unsubscribe();
  }
}
