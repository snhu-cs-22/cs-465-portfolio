import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  private editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  private deleteTrip(trip: Trip): void {
    // TODO: make this a fancy modal window instead of window.confirm
    var confirm = window.confirm("Are you sure you want to delete this trip?");
    
    if (confirm) {
      localStorage.removeItem("tripCode");
      localStorage.setItem("tripCode", trip.code);
      this.router.navigate(['delete-trip']);
    }
  }

}
