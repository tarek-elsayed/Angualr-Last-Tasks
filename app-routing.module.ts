import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'; 
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './auth.guard';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'login',
    component: TemplateFormComponent,
  },
  {
    path: 'register',
    component: ReactiveFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'login/redirect',
    component: ReactiveFormComponent,
  },
  {
    path: 'shopingcart',
    component: ShoppingCartComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
