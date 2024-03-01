import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../tools.service';
import { Tool } from '../tool.model';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrls: ['./toollist.component.css']
})
export class ToollistComponent implements OnInit{

  tools: Tool[] = []; 

  constructor(private  toolsService: ToolsService){
  }

  ngOnInit(): void{
    
    this.toolsService.getTools().subscribe((data:any) =>{
      this.tools = data.cards;
    })
    
  }
}
