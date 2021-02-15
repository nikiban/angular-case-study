import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteFiveComponent } from './route-five/route-five.component';
import { RouteFourComponent } from './route-four/route-four.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteSixComponent } from './route-six/route-six.component';
import { RouteThreeComponent } from './route-three/route-three.component';
import { RouteTwoComponent } from './route-two/route-two.component';

const routes: Routes = [
  { path: 'route-1', component: RouteOneComponent },
  { path: 'route-2', component: RouteTwoComponent },
  { path: 'route-3', component: RouteThreeComponent },
  { path: 'route-4', component: RouteFourComponent },
  { path: 'route-5', component: RouteFiveComponent },
  { path: 'route-6', component: RouteSixComponent },
  { path: '', redirectTo: 'route-1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
