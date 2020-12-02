import { Component, ViewEncapsulation } from '@angular/core';
import '@grapecity/spread-sheets-designer-resources-en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Tabela customizável';
  props = {
    styleInfo: "width: 100%; height: calc(100vh - 3px);",
    config: null
  };
}
