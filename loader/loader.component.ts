import { Component, OnInit } from '@angular/core';
import { LoaderService } from './../loader.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading : any;
  constructor(private loaderService : LoaderService) { }

  ngOnInit(): void {
    this.isLoading = this.loaderService.getLoader();
  }

}
