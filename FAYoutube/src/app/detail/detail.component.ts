import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { DataService } from "../data.service";
import { DomSanitizer } from '@angular/platform-browser';
interface dataD {
  items: [
    {
      contentDetails: {
        duration: string;
      };
      id: string;
      snippet: {
        channelTitle: string;
        description: string;
        thumbnails: {
          default: {
            height: Number;
            url: string;
            width: Number;
          };
          title: string;
        };
      };
      statistics: {
        commentCount: string;
        dislikeCount: string;
        favoriteCount: string;
        likeCount: string;
        viewCount: string;
      };
    }
  ];
}

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  id: string;
  url: string;
  dataD;
  urlVideo: string;
  constructor(private actRoute: ActivatedRoute, private dataS: DataService, public sanitizer: DomSanitizer) {
    actRoute.paramMap.subscribe((param: Params) => {
      this.id = param.get("id");
      this.urlVideo = `https://www.youtube.com/embed/${this.id}`;
      this.url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${
        this.id
      }&key=AIzaSyA2U-UnnW6xKAagmmwHKZb_Ur0x2PCHUgI`;
      dataS.getResult(this.url).subscribe((result: dataD) => {
        this.dataD = result.items;        
        console.log(this.dataD);
      });
    });

  }

  ngOnInit() {}
}
