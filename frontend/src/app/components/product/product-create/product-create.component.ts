import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  
  propLegal = "qualquer"

  constructor(private productService: ProductService, private router: Router){
  }

  ngOnInit() : void {
    this.productService.showOnConsole('teste service ngOnInit ..........')
  }
  createProduct() : void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!')
      this.goToRoot();
    });
    //this.productService.showMessage('Operação executada com sucesso!')
  }

  goToRoot() : void {
    this.router.navigate(['/products'])
  }

  cancel() : void {
    this.goToRoot()
  }

  fazerAlgo() : void {
    console.log('Fazendo algo!')
  }
}

