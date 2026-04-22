import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.cartSubject.next(this.items);
    }
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.product._id === product._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    this.saveCart();
  }

  removeFromCart(productId: string) {
    this.items = this.items.filter(item => item.product._id !== productId);
    this.saveCart();
  }

  updateQuantity(productId: string, quantity: number) {
    const item = this.items.find(i => i.product._id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.saveCart();
      }
    }
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.cartSubject.next([...this.items]);
  }
}
