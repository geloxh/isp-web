import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { PromoService } from '../../services/promo.service';
import { NgFor, NgIf, CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  orders: Order[] = [];
  stats = {
    totalRevenue: 0,
    orderCount: 0,
    productCount: 0,
    promoCount: 0
  };

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private promoService: PromoService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.stats.orderCount = orders.length;
      this.stats.totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
    });

    this.productService.getProducts().subscribe(products => {
      this.stats.productCount = products.length;
    });

    this.promoService.getPromos().subscribe(promos => {
      this.stats.promoCount = promos.length;
    });
  }

  updateStatus(orderId: string, status: string): void {
    this.orderService.updateOrderStatus(orderId, status).subscribe(() => {
      this.loadData();
    });
  }
}
