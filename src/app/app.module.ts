import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './income/form/form.component';
import { NewComponent } from './income/new/new.component';
import { EditComponent } from './income/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NewComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
