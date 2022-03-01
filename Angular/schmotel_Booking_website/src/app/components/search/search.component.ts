import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from 'src/app/Interfaces/search';
import { SearchresultService } from 'src/app/services/searchresult.service';
import { Destination } from 'src/app/Interfaces/destination';
import { SearchServiceService } from 'src/app/services/search-service.service';
import { IHotel } from 'src/app/Interfaces/IHotel';
import { MainComponent } from 'src/app/main-page/main/main.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // template: `
    // <section class="search-section">
    //   <div class="form-wrapper">
    //     <!-- location input section -->
    //     <form class="hotel-search-form">
    //       <div class="row">
    //         <div class="four columns">
    //           <label for="search-city-input"> Where to?</label>
    //           <input
                
    //             type="text"
    //             placeholder="e.g. North Korea"
    //             id="search-city-input"
    //             class="u-full-width search-city-input"
    //           />
    //         </div>

    //         <!-- departing/arrival date calendar input section-->
    //         <div class="five columns">
    //           <div class="six columns">
    //             <label for="check-in date">check-in</label>
    //             <input
    //               type="date"
    //               id="check-in-date"
    //               class="u-full-width check-in-date"
    //             />
    //           </div>
    //           <div class="six columns">
    //             <label for="num-passengers">check-out</label>
    //             <input
    //               type="date"
    //               id="check-out-date"
    //               class="u-full-width check-out-date"
    //             />
    //           </div>
    //         </div>
    //         <!--  -->
    //         <!-- number of guests input section -->
    //         <div class="three columns u-full-width guest-qty-input">
    //           <div class="one column left-button">
    //             <i class="fa-solid fa-angle-left"></i>
    //           </div>
    //           <div class="three columns">
    //             <label for="num-guests">
    //               <i class="fa-solid fa-user-group"></i>
    //               <input type="number" id="num-guests" class="num-guests" />
    //             </label>
    //           </div>
    //           <div class="one column right-button">
    //             <i class="fa-solid fa-angle-right"></i>
    //           </div>
    //         </div>
    //       </div>
    //     </form>
    //     <div class="search-btn-div">
    //       <button
            
    //         class="button-primary search-btn"
    //         id="seatch-btn"
    //         type="submit"
    //       >
    //         search
    //       </button>
    //     </div>
    //   </div>
    // </section>
  // `,
  styleUrls: ['./search.component.css'],
})



export class SearchComponent implements OnInit {
  // constructor(private router: Router) {}

  @Output() notify = new EventEmitter<IHotel[]>();


  hotels:IHotel[] =[]

    hotel: IHotel = {
      id:0,
      hotelName : "",
      rating:"",
      price:"",
      thumbnailUrl:""
    }
  
    location:string = "";
    checkInDate:string = "";
    checkOutDate:string = "";
    numAdults:number = 0;
    
    error: boolean = false;
  
    async onSubmit():Promise<void>{
      this.hotels = [];
      console.log(this.location, this.checkInDate, this.checkOutDate, this.numAdults)
      await this.searchService.getHotels(this.location, this.checkInDate, this.checkOutDate, this.numAdults)
      this.hotels = this.searchService.hotels;
      console.log(this.searchService.hotels)
      this.notify.emit(this.hotels)
    }



  // lstdestinations: Destination[] = [];


  constructor(private searchService:SearchServiceService, private router: Router) {}

    // searchreaultData = null;


  ngOnInit(): void {
  //   this.searchresultService.getsearchresult().subscribe((data)=>{

  //     console.log(data);
  //     this.searchreaultData = data;
  //   });
  }

  // public callApi() {
  //     console.log("the api has been called");
  //     this.SearchresultService.callApi().subscribe((data)=>{
  //      console.log(data);
  //       });
  // }

 // searchFilter = false;


  }

  

 
  

  
