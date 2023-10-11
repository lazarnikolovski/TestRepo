import { Component } from "@angular/core";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})

export class ContainerComponent {

    products = [
        {id:1, name: 'Times', price: '120', available: 'Available', image: 'assets/products/product-image-1.jpeg'},
        {id:2, name: 'Marathon', price: '159', available: 'Available', image: 'assets/products/product-image-2.jpeg'},
        {id:3, name: 'Casio', price: '180', available: 'Available', image: 'assets/products/product-image-3.jpeg'},
        {id:4, name: 'Rolex', price: '4990', available: 'Available', image: 'assets/products/product-image-4.jpeg'},
    ];
}