import { Component, OnInit } from '@angular/core';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  counter :any 
  constructor(private counterServ :MyservService) { 
  
  }

  ngOnInit(): void {
    this.counterServ.getCounter().subscribe((counter)=> this.counter = counter)
  
  }

}
