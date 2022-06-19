import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartsService {
  cartsUrl = 'https://angular-shopium.herokuapp.com/cart';
  constructor(private httpClient: HttpClient) {}
  getAllcarts() {
    return this.httpClient.get<{ message: string; carts: any }>(
      `${this.cartsUrl}`
    );
  }

  //Get one Object
  getCartById(id: string) {
    return this.httpClient.get<{ cart: any }>(`${this.cartsUrl}/getcart/${id}`);
  }

  // Add object to DB
  addCart(cart: any) {
    return this.httpClient.post(`${this.cartsUrl}`, cart);
  }

  // Delete Object By ID
  deleteCart(id: string) {
    return this.httpClient.delete(`${this.cartsUrl}/${id}`);
  }

  // Edit Object
  editCart(cart: any) {
    return this.httpClient.patch<{ message: string }>(
      `${this.cartsUrl}/${cart._id}`,
      cart
    );
  }
}
