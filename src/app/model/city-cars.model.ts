export interface CityCars {
  city: string;
  address: string;
  cars: Car[];
}

export interface Car {
  id: number;
  name: string;
  cost: string;
  detail: Detail[];
}

export interface Detail {
  description: string;
  stoff: string;
  type: string;
  deur: string;
  plaats: number;
}
