import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  search: string;
  constructor(private http: HttpClient) {}
  getResult(url: string) {
    return this.http.get(url);
  }
}
//'
