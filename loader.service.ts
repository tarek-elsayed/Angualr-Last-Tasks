import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new BehaviorSubject(true);

  constructor() { }
  getLoader(){
    return this.isLoading;
  }

  setLoader(newValue :any){
    this.isLoading.next(newValue);
  }
}
