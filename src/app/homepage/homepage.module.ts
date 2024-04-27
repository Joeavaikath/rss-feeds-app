import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule} from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomepageModule { }
