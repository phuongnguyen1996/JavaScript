import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"],
})
export class VideoComponent implements OnInit {
  @Input() data: {
    items: [
      {
        id: {
          videoId: string;
        };
        snippet: {
          title: string;
          description: string;
          thumbnails: {
            default: {
              url: string;
              width: Number;
              height: Number;
            };
          };
          publishedAt: Date;
          channelTitle: string;
        };
      }
    ];
  };
  
  constructor() {}

  ngOnInit() {
    
  }
}
