import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "FATubeApp";
  value: string; // day la ket qua cua o input
  url: string;
  data;
  constructor(private dataService: DataService) {}
  onSearch(value){
    this.value = value; 
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=AIzaSyA2U-UnnW6xKAagmmwHKZb_Ur0x2PCHUgI`;
    this.dataService.getResult(this.url).subscribe((result)=>{
      this.data = result;
    });
    
  }
}
