import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './income/form/form.component';
import { NewComponent } from './income/new/new.component';
import { EditComponent } from './income/edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AngularDateTimePickerModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
