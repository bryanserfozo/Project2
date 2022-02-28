import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  template: `
    <section class="search-section">
      <div class="form-wrapper">
        <!-- location input section -->
        <form class="hotel-search-form">
          <div class="row">
            <div class="four columns">
              <label for="search-city-input"> Where to?</label>
              <input
                [(ngModel)]="location"
                type="text"
                placeholder="e.g. North Korea"
                id="search-city-input"
                class="u-full-width search-city-input"
              />
            </div>

            <!-- departing/arrival date calendar input section-->
            <div class="five columns">
              <div class="six columns">
                <label for="check-in date">check-in</label>
                <input
                  type="date"
                  id="check-in-date"
                  class="u-full-width check-in-date"
                />
              </div>
              <div class="six columns">
                <label for="num-passengers">check-out</label>
                <input
                  type="date"
                  id="check-out-date"
                  class="u-full-width check-out-date"
                />
              </div>
            </div>
            <!--  -->
            <!-- number of guests input section -->
            <div class="three columns u-full-width guest-qty-input">
              <div class="one column left-button">
                <i class="fa-solid fa-angle-left"></i>
              </div>
              <div class="three columns">
                <label for="num-guests">
                  <i class="fa-solid fa-user-group"></i>
                  <input type="number" id="num-guests" class="num-guests" />
                </label>
              </div>
              <div class="one column right-button">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </form>
        <div class="search-btn-div">
          <button
            (click)="onSubmit()"
            class="button-primary search-btn"
            id="seatch-btn"
            type="submit"
          >
            search
          </button>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) {}

  public location = '';
  public checkIn = '';
  public checkOut = '';
  public numGuests = '';

  searchFilter = false;
  ngOnInit(): void {}

  onSubmit() {
    alert(this.location);
  }
}
