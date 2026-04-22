import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe, FormsModule, RouterLink],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];
  isEditing = false;
  currentProduct: Product = this.getEmptyProduct();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getEmptyProduct(): Product {
    return {
      name: '',
      description: '',
      price: 0,
      category: 'Broadband',
      features: []
    };
  }

  editProduct(product: Product): void {
    this.currentProduct = { ...product, features: [...(product.features || [])] };
    this.isEditing = true;
  }

  deleteProduct(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }

  saveProduct(): void {
    if (this.currentProduct._id) {
      this.productService.updateProduct(this.currentProduct._id, this.currentProduct).subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
    } else {
      this.productService.createProduct(this.currentProduct).subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
    }
  }

  addFeature(): void {
    if (!this.currentProduct.features) this.currentProduct.features = [];
    this.currentProduct.features.push('');
  }

  removeFeature(index: number): void {
    this.currentProduct.features?.splice(index, 1);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  resetForm(): void {
    this.currentProduct = this.getEmptyProduct();
    this.isEditing = false;
  }
}
