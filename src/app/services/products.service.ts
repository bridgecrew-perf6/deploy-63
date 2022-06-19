import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsUrl = 'https://angular-shopium.herokuapp.com/product';
  constructor(private httpClient:HttpClient) { }
    getAllProducts() {
      return this.httpClient.get<{products:any}>(`${this.productsUrl}/`)
    }
  
    //Get one Object
    getProductById(id:string) {
      return this.httpClient.get<{product:any}>(`${this.productsUrl}/${id}`);
    }
  
    // Add object to DB
    addProduct(product:any){
      return this.httpClient.post(`${this.productsUrl}`, product);
    }
  
    // Delete Object By ID
    deleteProduct(id:string) {
      return this.httpClient.delete(`${this.productsUrl}/${id}`);
    }
  
    // Edit Object
    editProduct(product:any) {   
      return this.httpClient.patch<{message:string}>(`${this.productsUrl}/${product._id}`, product);
    }
  
}
