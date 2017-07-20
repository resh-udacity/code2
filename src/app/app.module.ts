import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PublicDealsComponent } from './products/public-deals.component';
import { AllMartRoutingModule } from './app-routing.module';
import { DealService } from 'services/deal.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicDealsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AllMartRoutingModule
  ],
  providers: [DealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
