import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../data.service';
import { Car, CityCars } from './../model/city-cars.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  currentCar: Car;
  currentCity: string;
  currentCarId: string;

  panelOpenState = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.mockGetAllCities().subscribe((res: CityCars[]) => {
      this.currentCity = this.activatedRoute.snapshot.params['city'];
      this.currentCarId = this.activatedRoute.snapshot.params['carId'];
      console.log(this.currentCity, this.currentCarId);

      console.log('this.currentCar', res);
      this.currentCar = this.dataService.getonauto(
        res,
        this.currentCity,
        +this.currentCarId
      );
    });
  }
}
