import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BookingTableDataSource, IBookHistory} from './booking-table-datasource';

@Component({
  selector: 'booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css']
})
export class BookingTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IBookHistory>;
  dataSource: BookingTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['hotelName', 'checkIn', 'checkOut', 'dateBook'];

  constructor() {
    this.dataSource = new BookingTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
