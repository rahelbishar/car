import { CityCarsComponent } from './../city-cars/city-cars.component';
import { DataService } from './../data.service';
import { Car, CityCars } from './../model/city-cars.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { validateVerticalPosition } from '@angular/cdk/overlay';

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

  SignupForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  afhaalChange(date, type?): void {
    // console.log('d', d);
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const finalDate = `${day}/${month}/${year}`;
    console.log(`${day}/${month}/${year}`);
    type === 'from' ? (this.dateFrom = finalDate) : (this.dateTo = finalDate);
  }

  ngOnInit() {
    this.dataService.mockGetAllCities().subscribe((res: CityCars[]) => {
      this.currentCity = this.activatedRoute.snapshot.params['city'];
      this.currentCarId = this.activatedRoute.snapshot.params['carId'];
      console.log(this.currentCity, this.currentCarId);

      this.currentCar = this.dataService.getonauto(
        res,
        this.currentCity,
        +this.currentCarId
      );
      this.SignupForm = new FormGroup(
        {
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
          afhaaldate: new FormControl('', [Validators.required]),
          afhaaltime: new FormControl('Choose Time', [Validators.required]),
          terugdate: new FormControl('', [Validators.required]),
          terugtime: new FormControl('Choose Time', [Validators.required]),
          period: new FormControl('Halfdag'),
          kost: new FormControl(this.currentCar.cost),
        },
        { validators: checkDates('afhaaldate', 'terugdate') }
      );
    });
  }
  // tslint:disable-next-line: typedef

  onSubmit() {
    console.log(this.dateFrom, this.dateTo, this.SignupForm.value);
    // this.SignupForm.patchValue({
    //   afhaaldate: this.dateFrom,
    //   terugdate: this.dateTo,
    // });
    setTimeout(() => {
      this.dataService.dataSubject.next(this.SignupForm.value);
    }, 200);

    this.router.navigate(['info']);
  }
}
const checkDates = (field1: string, field2: string): ValidatorFn => (
  form: FormGroup
): null | { [key: string]: boolean } => {
  console.log(form);
  const fromDate = convertDate(form.get(field1).value);
  const toDate = convertDate(form.get(field2).value);

  function convertDate(date): string {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const finalDate = `${day}/${month}/${year}`;
    return finalDate;
  }

  if (toDate < fromDate) {
    return { datesFailed: true };
  }
  return null;
};
