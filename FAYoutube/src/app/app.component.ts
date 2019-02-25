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
  data;
  constructor(private dataService: DataService) {}
  onSearch(value){
    this.value = value; 
    this.dataService.getResult(this.value).subscribe((result)=>{
      this.data = result;
    });
    
  }
}
