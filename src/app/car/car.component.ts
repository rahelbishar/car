import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../data.service';
import { Car } from './../model/city-cars.model';

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
    this.currentCity = this.activatedRoute.snapshot.params['city'];
    this.currentCarId = this.activatedRoute.snapshot.params['carId'];
    this.currentCar = this.dataService.data
      .filter((city) => city.city === this.currentCity)[0]
      .cars.filter((car) => car.id === +this.currentCarId)[0];
    console.log(this.currentCity, this.currentCarId, this.currentCar);
  }
}
