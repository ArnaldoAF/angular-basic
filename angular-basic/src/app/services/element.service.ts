import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Element } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  element: Element[] = [
    {
      id: 1,
      name: "Benjamin Sisko",
      email: "benjamin.sisko@ds9.com",
      phone: 222
    },
    {
      id: 2,
      name: "Kira Nerys",
      email: "kira.nerys@ds9.com",
      phone: 111
    }
  ];

  constructor() { }

  onGet() {
    return this.element;
  }
}
