import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tool } from '../../tool.model';

@Component({
  selector: 'app-tool-item',
  templateUrl: './tool-item.component.html',
  styleUrls: ['./tool-item.component.css']
})
export class ToolItemComponent implements OnInit{
 
  @Input() tool!: Tool;
  @Input() index!: number;

  constructor(){}


  ngOnInit(): void {
    
  }

}
