import { BookingTrip } from './../interfaces/booking.interface';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BookingService {

  actionUrl = '/bookings';
  constructor(private api: BaseService) { }

  bookTrip(tripData: BookingTrip) {
    this.api.setActionUrl(this.actionUrl);
    return this.api.post(tripData);
  }
}
