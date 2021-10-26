import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { IProduct } from '../iproduct';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

@Input() Product : Array<IProduct>;
@Output() sendItem = new EventEmitter();

  counte!:any
  
  constructor(private counterServ :MyservService) {
    this.Product = []
  }

 selectedItem(){
   this.sendItem.emit(this.Product);
 }
  ngOnInit(): void {

    this.counterServ.getCounter().subscribe(
      (res : any)=>{
      this.counte = res
      },
    )
   
  }
  increment(id:number){
    this.counterServ.setCounter(this.counte + 1, id);

  
  }

}
