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
import { Edit2Component } from './expense/edit2/edit2.component';
import { Form2Component } from './expense/form2/form2.component';
import { New2Component } from './expense/new2/new2.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NewComponent,
    EditComponent,
    Edit2Component,
    Form2Component,
    New2Component,
    IncomeListComponent,
    ExpenseListComponent

  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
