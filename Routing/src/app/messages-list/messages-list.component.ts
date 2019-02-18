import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
interface Data {
  folder: string,
  body: string,
  subject: string,
  from: string,
  to: string,
  date: string,
  senderName: { last: string, first: string },
  corpus: string,
  _id: string
}
@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  data: Data[];
  res: Data[];
  item: Data[];
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.data = this.dataService.getData();
  }
  folder: string
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.folder = param.get("list");//"inbox"
      this.res=this.data.filter((item: Data)=>item.folder===this.folder);
      
    })
  }

}
