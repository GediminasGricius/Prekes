import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public products;

  constructor(public productService:ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(responseData=>{
      this.products=responseData;
    });
  }

}
