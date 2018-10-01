import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { MainWidgetComponent } from './main-widget/main-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { FollowerWidgetComponent } from './follower-widget/follower-widget.component';
import { DetailsComponent } from './details/details.component';
import { DataService } from './services/data.service';
import { FilterPipe } from './pipes/filter.pipe';
import { StyleDirective } from './directives/style.directive';
import { BackgroundDirective } from './directives/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainWidgetComponent,
    WeatherWidgetComponent,
    FollowerWidgetComponent,
    DetailsComponent,
    FilterPipe,
    StyleDirective,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
