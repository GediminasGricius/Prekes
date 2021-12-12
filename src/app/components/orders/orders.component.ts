import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders;
  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(response => {
      this.orders = response;
    });

  }

}
