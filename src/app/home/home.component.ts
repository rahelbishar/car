import { CityCars } from './../model/city-cars.model';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allCities: CityCars[];
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.mockGetAllCities().subscribe((res: CityCars[]) => {
      console.log('mock data is', res);
      this.allCities = res;
    });
  }
}
