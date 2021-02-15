import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteThreeComponent } from './route-three/route-three.component';
import { CounterDisplayComponent } from './route-three/counter-display/counter-display.component';
import { CounterInputComponent } from './route-three/counter-input/counter-input.component';
import { CounterTimestampComponent } from './route-three/counter-timestamp/counter-timestamp.component';
import { CounterTriggerCountComponent } from './route-three/counter-trigger-count/counter-trigger-count.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { RouteFourComponent } from './route-four/route-four.component';
import { RouteFiveComponent } from './route-five/route-five.component';
import { RouteSixComponent } from './route-six/route-six.component';
import { CounterDisplaySerComponent } from './route-four/counter-display-ser/counter-display-ser.component';
import { CounterInputSerComponent } from './route-four/counter-input-ser/counter-input-ser.component';
import { CounterTimestampSerComponent } from './route-four/counter-timestamp-ser/counter-timestamp-ser.component';
import { CounterTriggerCountSerComponent } from './route-four/counter-trigger-count-ser/counter-trigger-count-ser.component';

import { ShareService } from './route-four/share.service';
import { ProductItemComponent } from './route-two/product-item/product-item.component';
import { PriceFilterPipe } from './route-two/price-filter.pipe';
import { SortTablePipe } from './route-five/sort-table.pipe';
@NgModule({
  declarations: [
    AppComponent,
    RouteThreeComponent,
    CounterDisplayComponent,
    CounterInputComponent,
    CounterTimestampComponent,
    CounterTriggerCountComponent,
    RouteOneComponent,
    RouteTwoComponent,
    RouteFourComponent,
    RouteFiveComponent,
    RouteSixComponent,
    CounterDisplaySerComponent,
    CounterInputSerComponent,
    CounterTimestampSerComponent,
    CounterTriggerCountSerComponent,
    ProductItemComponent,
    PriceFilterPipe,
    SortTablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
