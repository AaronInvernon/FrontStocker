import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  user: User;
  products: Product[];
  constructor(
    private router:Router,
    private productService: ProductService
  ) { }

  ngOnInit() {

    if (this.user == null){
      this.router.navigate(['/login']);
    } else {
      this.productService.getProducts().subscribe((products) => {
        this.products = products;
      });
    }
  }

}
