import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { DataService } from '../../services/data.service';
import { Product } from '../../models/product';
import { AddCardDialog } from './dialog/addCardDialog'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [DataService]
})
export class HomeComponent implements OnInit {

    products: Product[];

    constructor(
        public dataService: DataService,
        public dialog: MdDialog
    ) { }

    ngOnInit() {
        this.updateProductsList();
    }

    updateProductsList() {
        this.dataService.getProducts()
            .subscribe(
            products => this.products = products,
            error => console.log(error)
            );
    }

    addCard() {
        this.dialog.open(AddCardDialog);
    }
}

