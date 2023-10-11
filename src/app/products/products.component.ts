import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    {id:1, name: 'Times', price: '120', available: 'Available', image: 'assets/products/product-image-1.jpeg'},
    {id:2, name: 'Marathon', price: '159', available: 'Available', image: 'assets/products/product-image-2.jpeg'},
    {id:3, name: 'Casio', price: '180', available: 'Available', image: 'assets/products/product-image-3.jpeg'},
    {id:4, name: 'Rolex', price: '4990', available: 'Available', image: 'assets/products/product-image-4.jpeg'},
];
}
