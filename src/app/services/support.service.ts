import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SupportService {
  ticketUrl = 'https://angular-shopium.herokuapp.com/tickets';
  constructor(private httpClient: HttpClient) {}

  //Get all the tickets in DB
  getAllTickets() {
    return this.httpClient.get<{ tickets: any }>(`${this.ticketUrl}/`);
  }

  //Send a ticket to DB
  addTicket(ticket: any) {
    return this.httpClient.post(`${this.ticketUrl}`, ticket);
  }
  //Delete a ticket from DB
  deleteTicket(id: any) {
    return this.httpClient.delete(`${this.ticketUrl}/${id}`);
  }
}
