import { Component, OnInit } from '@angular/core';
import { MyservService } from '../myserv.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private counterServ :MyservService) { }

  ngOnInit(): void {
    this.counterServ.getAllIdes()
    console.log( this.counterServ.getAllIdes())
  }
  

}
