import { Injectable } from '@angular/core';
import { ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';
import { CityCars, Detail } from './model/city-cars.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: CityCars[] = [
    {
      city: 'Gent',
      address: 'Henri Lebbestrat  80',
      cars: [
        {
          id: 1,
          name: 'volov',
          cost: '1500',
          detail: [
            {
              description:
                'De Volvo V40 is de ideale reisgezel voor in de stad. Deze compacte hatchback heeft een hedendaags design, is uiterst wendbaar en zuinig. Ben je op zoek naar een eersteklas stadswagen, twijfel dan niet langer en huur de Volvo V40 voor meer gemak in je dagelijks leven!',
              stoff: 'benzine',
              type: 'manauel',
              deur: '4',
              plaats: 6,
            },
          ],
        },
        {
          id: 2,
          name: 'volox',
          cost: '1200',

          detail: [
            {
              description:
                'De Volvo V40 is de ideale reisgezel voor in de stad. Deze compacte hatchback heeft een hedendaags design, is uiterst wendbaar en zuinig. Ben je op zoek naar een eersteklas stadswagen, twijfel dan niet langer en huur de Volvo V40 voor meer gemak in je dagelijks leven!',
              stoff: 'benzine',
              type: 'manauel',
              deur: '4',
              plaats: 6,
            },
          ],
        },
        {
          id: 3,
          name: 'jeeb',
          cost: '1700',
          detail: [
            {
              description:
                'De Volvo V40 is de ideale reisgezel voor in de stad. Deze compacte hatchback heeft een hedendaags design, is uiterst wendbaar en zuinig. Ben je op zoek naar een eersteklas stadswagen, twijfel dan niet langer en huur de Volvo V40 voor meer gemak in je dagelijks leven!',
              stoff: 'benzine',
              type: 'manauel',
              deur: '4',
              plaats: 6,
            },
          ],
        },
      ],
    },
    {
      city: 'Waregem',
      address: 'GanzenDries 31',
      cars: [
        {
          id: 1,
          name: 'lada',
          cost: '1500',
          detail: [
            {
              description:
                'De Volvo V40 is de ideale reisgezel voor in de stad. Deze compacte hatchback heeft een hedendaags design, is uiterst wendbaar en zuinig. Ben je op zoek naar een eersteklas stadswagen, twijfel dan niet langer en huur de Volvo V40 voor meer gemak in je dagelijks leven!',
              stoff: 'benzine',
              type: 'manauel',
              deur: '4',
              plaats: 6,
            },
          ],
        },
        {
          id: 2,
          name: 'fiat',
          cost: '1200',
          detail: [
            {
              description:
                'De Volvo V40 is de ideale reisgezel voor in de stad. Deze compacte hatchback heeft een hedendaags design, is uiterst wendbaar en zuinig. Ben je op zoek naar een eersteklas stadswagen, twijfel dan niet langer en huur de Volvo V40 voor meer gemak in je dagelijks leven!',
              stoff: 'benzine',
              type: 'manauel',
              deur: '4',
              plaats: 6,
            },
          ],
        },
        {
          id: 3,
          name: 'renault',
          cost: '1700',
          detail: [
            {
              description:
                'De Volvo V40 is de ideale reisgezel voor in de stad. Deze compacte hatchback heeft een hedendaags design, is uiterst wendbaar en zuinig. Ben je op zoek naar een eersteklas stadswagen, twijfel dan niet langer en huur de Volvo V40 voor meer gemak in je dagelijks leven!',
              stoff: 'benzine',
              type: 'manauel',
              deur: '4',
              plaats: 6,
            },
          ],
        },
      ],
    },
    {
      city: 'kortrijk',
      address: 'Jagresstratt 10',
      cars: [
        {
          id: 1,
          name: 'mini cooper',
          cost: '1500',
          detail: [
            {
              description:
                'De Volvo V40 is de ideale reisgezel voor in de stad. Deze compacte hatchback heeft een hedendaags design, is uiterst wendbaar en zuinig. Ben je op zoek naar een eersteklas stadswagen, twijfel dan niet langer en huur de Volvo V40 voor meer gemak in je dagelijks leven!',
              stoff: 'benzine',
              type: 'manauel',
              deur: '4',
              plaats: 6,
            },
          ],
        },

        {
          id: 2,
          name: 'honda',
          cost: '1200',

          detail: [
            {
              description:
                'De Volvo V40 is de ideale reisgezel voor in de stad. Deze compacte hatchback heeft een hedendaags design, is uiterst wendbaar en zuinig. Ben je op zoek naar een eersteklas stadswagen, twijfel dan niet langer en huur de Volvo V40 voor meer gemak in je dagelijks leven!',
              stoff: 'benzine',
              type: 'manauel',
              deur: '4',
              plaats: 6,
            },
          ],
        },
        {
          id: 3,
          name: 'scoda',
          cost: '1700',
          detail: [
            {
              description:
                'De Volvo V40 is de ideale reisgezel voor in de stad. Deze compacte hatchback heeft een hedendaags design, is uiterst wendbaar en zuinig. Ben je op zoek naar een eersteklas stadswagen, twijfel dan niet langer en huur de Volvo V40 voor meer gemak in je dagelijks leven!',
              stoff: 'benzine',
              type: 'manauel',
              deur: '4',
              plaats: 6,
            },
          ],
        },
      ],
    },
  ];
  constructor() {}
}
