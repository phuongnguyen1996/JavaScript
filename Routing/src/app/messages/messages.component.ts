import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  messages = [
    "inbox",
    "finance",
    "travel",
    "personal",
    "spam",
    "drafts",
    "sent",
  ];
  constructor(private dataService: DataService) {}
  ngOnInit() {
  }
}
