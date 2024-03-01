import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Tool } from './tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private http  : HttpClient ) { }

  private tools: Tool[] = [];
  URL :string = '../assets/tools.json';



  getTools(){
    return this.http.get(this.URL)

  }

}