import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToolComponent } from './tool/tool.component';
import { ToolItemComponent } from './tool/toollist/tool-item/tool-item.component';
import { ToollistComponent } from './tool/toollist/toollist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolComponent,
    ToolItemComponent,
    ToollistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
