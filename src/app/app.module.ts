import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { ReposDetailPageComponent } from './components/repos-detail-page/repos-detail-page.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    SearchpageComponent,
    HeaderComponent,
    FooterComponent,
    UserDetailPageComponent,
    HomeComponent,
    ReposDetailPageComponent,
    PaginationComponent,
    
    

    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
    
   
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
