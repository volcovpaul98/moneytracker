import { Component } from '@angular/core';
import { faCoffee, faHandHoldingUsd, faChartPie, faChartLine, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moneytracker';

  faCoffee = faCoffee;
  faHandHoldingUsd = faHandHoldingUsd;
  faChartPie = faChartPie;
  faChartLine = faChartLine;
  faFileInvoiceDollar=faFileInvoiceDollar;

}
