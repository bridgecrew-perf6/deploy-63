import { Component, OnInit } from '@angular/core';
import { SupportService } from '../services/support.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent {
  constructor(private supportService: SupportService) {}

  createTicket(ticket: {
    name: string;
    email: number;
    website: number;
    message: string;
  }) {
    console.log(ticket);

    this.supportService.addTicket(ticket).subscribe((res) => {
      console.log(res);
    });
  }
}
