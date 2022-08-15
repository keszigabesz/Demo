import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Input() product: Product = new Product();

  newProductGroup: FormGroup= new FormGroup({
    catId: new FormControl(''),
    author: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    featured: new FormControl(''),
    active: new FormControl(''),
  });

  categories: any[] = [
    {name:'-',id:0},
    {name:'ifjusági', id:1},
    {name:'kortárs',id:2},
    {name:'útikönyv',id:3}
  ];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.productService.createOne(this.newProductGroup.value)
    .forEach(value=>{
      this.router.navigate(['/', 'admin']);
  });
  }

}
