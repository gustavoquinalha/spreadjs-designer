import { Component, ViewEncapsulation } from '@angular/core';
import '@grapecity/spread-sheets-designer-resources-en';
import * as GC from '@grapecity/spread-sheets';
import * as DESIGNER from "@grapecity/spread-sheets-designer";

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

  constructor( ) {
		GC.Spread.Sheets.LicenseKey = 'E678526254418543#B0uTwN5YjZGd5kTbqtmd0J5QkZGc854MJFlM9d5NPhGOvQHOQtSRSdEWHRlSThDchxGb6J5SoZTZjF7bpp7R7oXZ0ZHTwp6NuxmQRF6NpZjbWFFcQJFM7tmN5BFdylFMoJWc6tGU0BDUkdjRJBHRrEjYF34NhxEby3ESpNDSMFDUPpmazsCN7YVduNHRHBFNstmTx2iNqBjR5RjdTdkcahlbFVlZzkEaBtkUZRDWL9WTPRXYRlmNIt4T4kUTMhWTvRGaZlUQVpHMTZ4ZywGalFVWrE4ZzJzbykma5djRJp6MS56LyQ5Uv3EM9dVOQ9ERB3mb7hmI0IyUiwiI5gzM9EkQwYjI0ICSiwSM6czN6gTNxkTM0IicfJye#4Xfd5nIFVUSWJiOiMkIsICNx8idgAyUKBCZhVmcwNlI0IiTis7W0ICZyBlIsICM4EDN7ADI4AjMxAjMwIjI0ICdyNkIsIyMwEDMxIDMyIiOiAHeFJCLi46bj9SemRnb536YjFGQuFGZhJmLy36ZpJiOiEmTDJCLlVnc4pjIsZXRiwiIzQTN8EDN4UjM6ITN8cjNiojIklkIs4XZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zdQV7UtV6RpNWYNBjYww6L5ZUQYFTRCVzLnRHSBlnbUhEZIVHVyREUzJzU85kSnd4Zzk7LhpEWwtkQUV6NlF5LVx4Q6cESBpHRoplM9kkT7FjUadlM0hWSzYlc8IUQYJmaZ5';
		DESIGNER.Spread.Sheets.Designer.LicenseKey = 'E164783355679372#B0dM8d7omTzIXOwVlU6BFNF5ETsFVenh5YhRkcHRHT9okbsNWZCJDV5kzQRZWTv2Gdnx4cZxWbxYmRzRHU526QHtSR944NMdFTxAjNvJnSJpFOI94UvNnTNFzVlBDavh4MyITQMB7UtpUMx46dZNTQslXQChWdOZ5dKNGN0JWcxl4V8lHSD3ScydFaa3CZ7F7cTV6UBdGVahWcZZVOqB5RKVVWzMGMsN7KpJFUiJFMIFkdGhEW0hkN7JEa7MGePBDTLdTY79WZrU6ZltEaXhUVwwUNKVnM4QnZXVmc9Vnc0FTSFtSWWFFZ0JndxtURiojITJCLiYjM8IUM6ETNiojIIJCL4gjN7QjMzEzN0IicfJye35XX3JSW6U4NiojIDJCLiQTMuYHIyVmbnl6clRULTpEZhVmcwNlI0IiTis7W0ICZyBlIsIiNxIDN7ADI4AjMxAjMwIjI0ICdyNkIsIyMwEDMxIDMyIiOiAHeFJCLi46bj9SemRnb536YjFGQuFGZhJmLy36ZpJiOiEmTDJCLlVnc4pjIsZXRiwiIyczM9cjN5UzMzgzN4YTMiojIklkI1pjIEJCLi4TPBBVb6oVeyQ7Y9FESshXWStyavUzcz3GVXVVNGN4d5dENKdkcSJkT5lnUnNWS5wkTMhUVkVzUHRGeWF4a7Q6cYNWOZVUWQhUaIN6YuR7NolVaUNEW4RWW6tyYj3iTvlEVjdVbDB7YdFQR';
	}

  // config = {
  //   sheetName: 'Accountfy Teste',
  //   spreadBackColor: '#ffffff',
  //   grayAreaBackColor: '#ffffff',
  //   data: [
  //     { Name: 'Apple', Category: 'Fruit', Price: 1, shoppingPlace: 'Wal-Mart' },
  //     { Name: 'Potato', Category: 'Fruit', Price: 2.01, shoppingPlace: 'Other' },
  //     { Name: 'Tomato', Category: 'Vegetable', Price: 3.21, shoppingPlace: 'Other' },
  //     { Name: 'Sandwich', Category: 'Food', Price: 2, shoppingPlace: 'Wal-Mart' },
  //     { Name: 'Hamburger', Category: 'Food', Price: 2, shoppingPlace: 'Wal-Mart' },
  //     { Name: 'Grape', Category: 'Fruit', Price: 4, shoppingPlace: 'Sun Store' }
  //   ],
  //   autoGenerateColumns: false,
  //   newTabVisible: false,
  //   tabStripVisible: false,
  //   tabStripRatio: false,
  //   tabNavigationVisible: false,
  //   scrollbarShowMax: true,
  //   scrollbarMaxAlign: true,
  //   showHorizontalScrollbar: true,
  //   showVerticalScrollbar: true,
  //   allowUserZoom: true,
  //   allowUserResize: true,
  //   rowHeaderVisible: true,
  //   columnHeaderVisible: true,
  //   frozenRowCount: 3,
  //   frozenColumnCount: 2,
  //   frozenTrailingRowCount: 0,
  //   frozenTrailingColumnCount: 0,
  //   rowCount: 200,
  //   columnCount: 20,
  //   sheetTabColor: '#ffffff',
  //   frozenlineColor: '#ffffff',
  //   selectionBackColor: '#ffffff',
  //   selectionBorderColor: '#ffffff',
  //   visible: true,
  //   resizable: true,
  // }
}
