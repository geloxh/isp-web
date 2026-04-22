import { Component, OnInit } from '@angular/core';
import { PromoService, Promo } from '../../services/promo.service';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-promos',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, FormsModule, RouterLink],
  templateUrl: './admin-promos.component.html',
  styleUrl: './admin-promos.component.css'
})
export class AdminPromosComponent implements OnInit {
  promos: Promo[] = [];
  isEditing = false;
  currentPromo: Promo = this.getEmptyPromo();

  constructor(private promoService: PromoService) {}

  ngOnInit(): void {
    this.loadPromos();
  }

  loadPromos(): void {
    this.promoService.getPromos().subscribe(promos => {
      this.promos = promos;
    });
  }

  getEmptyPromo(): Promo {
    return {
      title: '',
      description: '',
      isActive: true
    };
  }

  editPromo(promo: Promo): void {
    this.currentPromo = { ...promo };
    this.isEditing = true;
  }

  deletePromo(id: string): void {
    if (confirm('Are you sure you want to delete this promo?')) {
      this.promoService.deletePromo(id).subscribe(() => {
        this.loadPromos();
      });
    }
  }

  savePromo(): void {
    if (this.currentPromo._id) {
      this.promoService.updatePromo(this.currentPromo._id, this.currentPromo).subscribe(() => {
        this.resetForm();
        this.loadPromos();
      });
    } else {
      this.promoService.createPromo(this.currentPromo).subscribe(() => {
        this.resetForm();
        this.loadPromos();
      });
    }
  }

  resetForm(): void {
    this.currentPromo = this.getEmptyPromo();
    this.isEditing = false;
  }
}
