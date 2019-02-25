import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  videoUrl: string =  `https://www.googleapis.com/youtube/v3/search`;
  key: string = `AIzaSyA2U-UnnW6xKAagmmwHKZb_Ur0x2PCHUgI`
  id: string;
  constructor(private http: HttpClient) {}

  getResult(value: string) {
    return this.http.get(this.videoUrl, {
      params: {
        part: 'snippet',
        maxResults: '25',
        q: value,
        key: this.key
      }
    });
  }

  getDetail(idVideo: string) {
    this.id=idVideo;
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.id}&key=AIzaSyA2U-UnnW6xKAagmmwHKZb_Ur0x2PCHUgI`);
  }
}

