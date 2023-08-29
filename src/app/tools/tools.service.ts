import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
// import { cards } from '../assets/tools.json';


export interface cards{
  code: string;
  name: string;
  label: string;
  description: string;
  iconURL: any;
  addressUrl: any;
}

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private URL = '../assets/tools.json';

  constructor(private http: HttpClient) { }

  getTool(){
    return this.http.get(this.URL).subscribe(console.log);
    // return this.http.get("assets/tools.json");
  }
  
}
