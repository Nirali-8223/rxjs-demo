import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListObservableComponent } from './list-observable/list-observable.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { toArray } from 'rxjs/operators';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';

const routes: Routes = [
  {
    path: '',
    component: ListObservableComponent,
  },
  {
    path: 'fromEvent',
    component: FromEventComponent
  },
  {
    path: 'interval-and-timer',
    component: IntervalTimerComponent
  },
  {
    path: 'of-and-from',
    component:OfFromComponent
  },
  {
    path:'to-array',
    component:ToArrayComponent
  },
  {
    path:'custom-observable',
    component:CustomObservableComponent
  },
  {
    path:'map',
    component:MapComponent
  },
  {
    path:'pluck',
    component:PluckComponent
  },
  {
    path:'filter',
    component:FilterComponent
  },
  {
    path:'tap',
    component:TapComponent
  },
  {
    path:'take',
    component:TakeComponent
  },
  {
    path:'retry',
    component:RetryComponent
  }
  ];

@NgModule({
  declarations: [
    ListObservableComponent,
    IntervalTimerComponent,
    OfFromComponent,
    CustomObservableComponent,
    MapComponent,
    ToArrayComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class ObeservableModule { }
