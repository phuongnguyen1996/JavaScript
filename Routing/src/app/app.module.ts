import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ContactComponent } from './contact/contact.component';
import { SettingComponent } from './setting/setting.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { DataService } from './data.service';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ContactComponent,
    SettingComponent,
    MessagesListComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
