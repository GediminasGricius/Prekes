import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public http:HttpClient) { }

  public getOrders(){
    return this.http.get('http://localhost:8080/api/orders');
  }
}
