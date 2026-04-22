import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartCount$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cartCount$ = this.cartService.getCart();
  }

  getCartItemsCount(items: any[] | null): number {
    return items ? items.reduce((count, item) => count + item.quantity, 0) : 0;
  }
}
