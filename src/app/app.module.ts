import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../app/table/table.component';
import { EldComponent } from '../app/ELD/eld.component';
import { AruComponent } from './aru/aru.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    EldComponent,
    TableComponent,
    AruComponent,
    TestComponent,
   /*  FormsModule,
    ReactiveFormsModule,  */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
