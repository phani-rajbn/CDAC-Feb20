import { Component, OnInit } from '@angular/core';
import { Product } from '../../Classes/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product [] = [];//blank Array...
  constructor() { }

  ngOnInit(): void {
    this.products.push(new Product(111, "Apples", "../../../assets/images/apples.jfif", 120));
    this.products.push(new Product(112, "Bananas", "../../../assets/images/bananas.jfif", 120));
    this.products.push(new Product(113, "Carrots", "../../../assets/images/carrots.jfif", 120));
    this.products.push(new Product(114, "Onions", "../../../assets/images/onions.jfif", 120));
    this.products.push(new Product(115, "Tomatoes", "../../../assets/images/tomatoes.jfif", 120));
  }

}
