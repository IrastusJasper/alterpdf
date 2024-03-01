import { Component } from '@angular/core';
import { ToolsService } from './tools.service';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css'],
  providers: [ToolsService]
})
export class ToolComponent {

}
