import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ActivatedRoute } from '@angular/router';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ProductList !: Array<object>
  productItem : any;
  productItemId : any;
  constructor(private activeRoute : ActivatedRoute, private prdService: MyservService) { }

  ngOnInit(): void {
    this.productItemId = this.activeRoute.snapshot.params.id;
    console.log( this.productItemId)
    this.productItem  =  this.prdService.getProduct(this.productItemId).subscribe(
      (res)=>{
        this.productItem = res;
      }
     ) 
    console.log(   this.productItem )
  }

}
