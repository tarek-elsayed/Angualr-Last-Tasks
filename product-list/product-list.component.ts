import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { Router } from '@angular/router';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    
  ProductList !: any

    
  recevieItem(myVal: any){
    console.log(myVal);
  }

        
  ngAfterViewInit(){
    this.prdService.getAllProducts().subscribe(
      (res)=>{
      this.ProductList = res;
      },
      (err)=>{console.log(err)}
    )
  }

    
  constructor(private router : Router, private prdService: MyservService) { }

  ngOnInit(): void {
  }
  

}
