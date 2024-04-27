import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule} from 'primeng/button';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomepageModule { }
