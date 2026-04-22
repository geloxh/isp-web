import { Component, OnInit } from '@angular/core';
import { PromoService, Promo } from '../../services/promo.service';
import { ProductService, Product } from '../../services/product.service';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredPromos: Promo[] = [];
  featuredProducts: Product[] = [];

  constructor(
    private promoService: PromoService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.promoService.getPromos().subscribe(promos => {
      this.featuredPromos = promos.filter(p => p.isActive).slice(0, 3);
    });
    this.productService.getProducts().subscribe(products => {
      this.featuredProducts = products.slice(0, 4);
    });
  }
}
