import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedManagerComponent } from './feed-manager/feed-manager.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';



@NgModule({
  declarations: [FeedManagerComponent, StatusIndicatorComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FeedManagerComponent,
    StatusIndicatorComponent
  ]
})
export class FeedsModule { }
