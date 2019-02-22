import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputFieldComponent } from "./input-field/input-field.component";
import { VideoComponent } from "./video/video.component";
import { DetailComponent } from "./detail/detail.component";
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    VideoComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,NgxPaginationModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
