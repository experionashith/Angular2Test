import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from "./app.routing";
import { AppComponent } from './app.component';
import { HomecomComponent } from './homecom/homecom.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { SearchcontactComponent } from './searchcontact/searchcontact.component';
import { LocalstorageService } from './localstorage.service';
@NgModule({
  declarations: [
    AppComponent,
    HomecomComponent,
    NewcontactComponent,
    ViewcontactComponent,
    EditcontactComponent,
    SearchcontactComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    
    HttpModule
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
