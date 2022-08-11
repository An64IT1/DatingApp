import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'ball-scale-multiple',
      bdColor: 'rgba(255,255,255,0)',
      color: '#333333'
    });
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <=0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
