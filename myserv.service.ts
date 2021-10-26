import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyservService {
private counter = new BehaviorSubject(0)
private productIDS : object = new BehaviorSubject({})
public itemId : Array<any> = [] ;

  constructor(private httpClient : HttpClient) { }


  getAllProducts(): Observable<object[]>{
    return this.httpClient.get<object[]>(`${environment.API_URL}/products`);
  }

  getProduct(id: number): Observable<object> {
    return this.httpClient.get<object>(`https://fakestoreapi.com/products/${id}`);
  }

  getCounter(){
    return this.counter;
  }

  setCounter(newCount : number, id: number) : any {
   this.itemId.push(id);
    return this.counter.next(newCount);
  }

  incrementCounter(newCount : number) : any {
    return this.counter.next(newCount ) 
  }
  decrCounter(newCount : number){
    return this.counter.next(newCount - 1) 
  }

  getAllIdes(){
    return this.itemId
  }


}
