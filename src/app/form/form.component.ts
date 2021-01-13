import { CityCarsComponent } from './../city-cars/city-cars.component';
import { DataService } from './../data.service';
import { Car } from './../model/city-cars.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  dateFrom: string;
  dateTo: string;
  currentCar: Car;
  currentCity: string;
  currentCarId: string;
  submitted: boolean = false;
  periodhuur = ['Halfdag', 'Heledag'];
  user = {
    firstname: '',
    lastname: '',
    adress: {
      city: '',
      straat: '',
    },
    emailFormControl: '',
    phone: '',
    afhaaldate: '',
    afhaaltime: '',
    terugdate: '',
    terugtime: '',
    period: '',
    kost: '',
  };

  SignupForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  afhaalChange(date, type?): void {
    const d = new Date(date);
    console.log(d);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const finalDate = `${day}/${month}/${year}`;
    console.log(`${day}/${month}/${year}`);
    type === 'from' ? (this.dateFrom = finalDate) : (this.dateTo = finalDate);
  }

  ngOnInit() {
    this.currentCity = this.activatedRoute.snapshot.params['city'];
    this.currentCarId = this.activatedRoute.snapshot.params['carId'];
    this.currentCar = this.dataService.data
      .filter((city) => city.city === this.currentCity)[0]
      .cars.filter((car) => car.id === +this.currentCarId)[0];
    console.log(this.currentCity, this.currentCarId, this.currentCar);

    this.SignupForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      adress: new FormGroup({
        city: new FormControl(null, [Validators.required]),
        straat: new FormControl(null, [Validators.required]),
      }),
      emailFormControl: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(null, [Validators.required]),
      afhaaldate: new FormControl(null, [Validators.required]),
      afhaaltime: new FormControl('Choose Time', [Validators.required]),
      terugdate: new FormControl(null, [Validators.required]),
      terugtime: new FormControl('Choose Time', [Validators.required]),
      period: new FormControl('Halfdag'),
      kost: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.dateFrom, this.dateTo, this.SignupForm.value);
    this.SignupForm.patchValue({
      afhaaldate: this.dateFrom,
      terugdate: this.dateTo,
    });
    this.submitted = true;
    this.user.firstname = this.SignupForm.value.firstname;
    this.user.lastname = this.SignupForm.value.lastname;
    this.user.adress.city = this.SignupForm.get('adress.city').value;
    this.user.adress.straat = this.SignupForm.get('adress.straat').value;

    this.user.emailFormControl = this.SignupForm.value.emailFormControl;
    this.user.phone = this.SignupForm.value.phone;
    this.user.afhaaldate = this.SignupForm.value.afhaaldate;
    this.user.afhaaltime = this.SignupForm.value.afhaaltime;
    this.user.terugdate = this.SignupForm.value.terugdate;
    this.user.terugtime = this.SignupForm.value.terugtime;
    this.user.period = this.SignupForm.value.period;
    this.user.kost = this.SignupForm.value.kost;
  }
}
