import { Component, OnInit } from '@angular/core';
import { CartsService } from '../services/carts.service';
@Component({
  selector: 'app-admin-see-orders',
  templateUrl: './admin-see-orders.component.html',
  styleUrls: ['./admin-see-orders.component.css'],
})
export class AdminSeeOrdersComponent implements OnInit {
  carts: any;
  constructor(private cartService: CartsService) {}
  ngOnInit(): void {
    this.cartService.getAllcarts().subscribe((carts) => {
      this.carts = carts.carts;

    });
  }
}
