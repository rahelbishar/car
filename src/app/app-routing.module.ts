import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CityCarsComponent } from './city-cars/city-cars.component';
import { HomeComponent } from './home/home.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'city-cars/:city', component: CityCarsComponent },
  { path: 'city-cars/:city/:carId', component: CarComponent },
  { path: 'reserve/:city/:carId', component: FormComponent },
  { path: '**', component: NotfoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
