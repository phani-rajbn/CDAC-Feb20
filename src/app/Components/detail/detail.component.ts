import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../Classes/product';

@Component({
  selector: 'product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input()
  public details : Product
  constructor() { }

  ngOnInit(): void {
  }

}
