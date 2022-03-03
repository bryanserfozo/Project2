import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISearch } from 'src/app/Interfaces/ISearch';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-number',
  templateUrl: './page-number.component.html',
  styleUrls: ['./page-number.component.css']
})
export class PageNumberComponent implements OnInit {

  @Output() changePage = new EventEmitter<ISearch>();

  search:ISearch = {
    location: '',
    checkIn: '',
    checkOut: '',
    numAdults: 1,
    pageNumber: 1,
    searchOrder: 0
  }

  pageNumber:number = 1;

  public setPageNum(type: string): void {
    console.log('clicked ');
    if (this.pageNumber > 1){
      type === 'plus' ? this.pageNumber++ : this.pageNumber--;
      this.search.pageNumber = this.pageNumber;
      this.dataService.changeSearch(this.search)
      this.changePage.emit(this.search)
    } else{
      type === 'plus' ? this.pageNumber++ : console.log("no negative pages");
      this.search.pageNumber = this.pageNumber;
      this.dataService.changeSearch(this.search)
      this.changePage.emit(this.search)
    }
    
  }

  constructor(private dataService:DataService) { }

  async ngOnInit(){
    await this.dataService.currentSearch.subscribe(search => this.search = search)
    this.pageNumber = this.search.pageNumber
  }

}
