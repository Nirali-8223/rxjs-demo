import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PromiseComponent } from './Components/obeservable/promise/promise.component';

const routes: Routes = [
  {
    path:'',
    component:PromiseComponent,
  },
  {
    path:'observable',
    canActivate:[AuthGuard],
    data:['Observable'],
    loadChildren:()=> import('./Components/obeservable/obeservable.module').then(o=>o.ObeservableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
