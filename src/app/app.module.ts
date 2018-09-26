import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainWidgetComponent } from './main-widget/main-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { FollowerWidgetComponent } from './follower-widget/follower-widget.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWidgetComponent,
    WeatherWidgetComponent,
    FollowerWidgetComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
