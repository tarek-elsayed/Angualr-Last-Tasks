import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
     next: HttpHandler
     ): Observable<HttpEvent<unknown>> {
  
       this.loaderService.setLoader(true);
       this.loaderService.getLoader().subscribe((data)=> console.log(data))
       const updatedRequest = request.clone({
         headers: request.headers.append('Accept-language', 'en'),
         params: request.params.append('limit','5')
       })
    return next
    .handle(request)
    .pipe(finalize(()=> this.loaderService.setLoader(false)))

  }
}
