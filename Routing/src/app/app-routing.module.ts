import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { ContactComponent } from "./contact/contact.component";
import { SettingComponent } from "./setting/setting.component";
import { MessagesListComponent } from './messages-list/messages-list.component';

const routes: Routes = [
  {
    path: "messages",
    component: MessagesComponent,
    children: [{
      path: ":list",
      component: MessagesListComponent,
  }]
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "setting",
    component: SettingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
