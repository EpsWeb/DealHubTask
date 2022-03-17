import {Component} from '@angular/core';

export enum LogLevel {
  Info, Warn, Error, Verbose
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logLevel = LogLevel;
  obj: any;

}
