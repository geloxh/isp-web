import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Promo {
  _id?: string;
  title: string;
  description: string;
  discountCode?: string;
  discountPercentage?: number;
  expiryDate?: Date;
  imageUrl?: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  private apiUrl = 'http://localhost:5000/api/promos';

  constructor(private http: HttpClient) { }

  getPromos(): Observable<Promo[]> {
    return this.http.get<Promo[]>(this.apiUrl);
  }

  getPromo(id: string): Observable<Promo> {
    return this.http.get<Promo>(`${this.apiUrl}/${id}`);
  }

  createPromo(promo: Promo): Observable<Promo> {
    return this.http.post<Promo>(this.apiUrl, promo);
  }

  updatePromo(id: string, promo: Promo): Observable<Promo> {
    return this.http.put<Promo>(`${this.apiUrl}/${id}`, promo);
  }

  deletePromo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
