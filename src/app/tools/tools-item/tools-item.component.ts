import { Component } from '@angular/core';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-tools-item',
  templateUrl: './tools-item.component.html',
  styleUrls: ['./tools-item.component.css']
})

export class ToolsItemComponent {

  constructor(private toolservice: ToolsService){}

  toollist:any[] = []
  
  ngOnInit(): void{
    this.loadToolItem();
  }
  
  
  loadToolItem(){
    // this.toolservice.getTool()
    this.toollist.push(this.toolservice.getTool());
    console.log(this.toollist);

  }
}
