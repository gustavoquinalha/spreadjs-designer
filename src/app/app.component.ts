import { Component } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-designer-resources-en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  props = {
    title: 'Tabela customizável',
    styleInfo: "width: 800px; height: 600px;",
    config: null
  };

  constructor() {
		// GC.Spread.Sheets.LicenseKey = 'E678526254418543#B0uTwN5YjZGd5kTbqtmd0J5QkZGc854MJFlM9d5NPhGOvQHOQtSRSdEWHRlSThDchxGb6J5SoZTZjF7bpp7R7oXZ0ZHTwp6NuxmQRF6NpZjbWFFcQJFM7tmN5BFdylFMoJWc6tGU0BDUkdjRJBHRrEjYF34NhxEby3ESpNDSMFDUPpmazsCN7YVduNHRHBFNstmTx2iNqBjR5RjdTdkcahlbFVlZzkEaBtkUZRDWL9WTPRXYRlmNIt4T4kUTMhWTvRGaZlUQVpHMTZ4ZywGalFVWrE4ZzJzbykma5djRJp6MS56LyQ5Uv3EM9dVOQ9ERB3mb7hmI0IyUiwiI5gzM9EkQwYjI0ICSiwSM6czN6gTNxkTM0IicfJye#4Xfd5nIFVUSWJiOiMkIsICNx8idgAyUKBCZhVmcwNlI0IiTis7W0ICZyBlIsICM4EDN7ADI4AjMxAjMwIjI0ICdyNkIsIyMwEDMxIDMyIiOiAHeFJCLi46bj9SemRnb536YjFGQuFGZhJmLy36ZpJiOiEmTDJCLlVnc4pjIsZXRiwiIzQTN8EDN4UjM6ITN8cjNiojIklkIs4XZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zdQV7UtV6RpNWYNBjYww6L5ZUQYFTRCVzLnRHSBlnbUhEZIVHVyREUzJzU85kSnd4Zzk7LhpEWwtkQUV6NlF5LVx4Q6cESBpHRoplM9kkT7FjUadlM0hWSzYlc8IUQYJmaZ5';
		GC.Spread.Sheets.LicenseKey = '';
	}
}
