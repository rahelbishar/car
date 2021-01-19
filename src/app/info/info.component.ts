import { FormGroup, NgForm } from '@angular/forms';
import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../model/city-cars.model';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  myData;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    console.log('info');
    this.dataService.dataSubject.subscribe((res) => {
      console.log(res);
      this.myData = res;
    });
  }
}
