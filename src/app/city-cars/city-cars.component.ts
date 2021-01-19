import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, CityCars } from './../model/city-cars.model';

@Component({
  selector: 'app-city-cars',
  templateUrl: './city-cars.component.html',
  styleUrls: ['./city-cars.component.css'],
})
export class CityCarsComponent implements OnInit {
  currentCity: string;
  cityCars: Car[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.mockGetAllCities().subscribe((res: CityCars[]) => {
      console.log('mock data is', res);
      this.currentCity = this.activatedRoute.snapshot.params['city'];
      this.cityCars = this.dataService.getAutoByCity(res, this.currentCity);
    });
  }
}
