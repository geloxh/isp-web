import { Component, OnInit } from '@angular/core';
import { PromoService, Promo } from '../../services/promo.service';
import { NgFor, NgIf, DatePipe } from '@angular/common';

@Component({
  selector: 'app-promos',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './promos.component.html',
  styleUrl: './promos.component.css'
})
export class PromosComponent implements OnInit {
  promos: Promo[] = [];

  constructor(private promoService: PromoService) {}

  ngOnInit(): void {
    this.promoService.getPromos().subscribe(promos => {
      this.promos = promos.filter(p => p.isActive);
    });
  }

  copyCode(code: string): void {
    navigator.clipboard.writeText(code);
    alert('Promo code copied to clipboard!');
  }
}
