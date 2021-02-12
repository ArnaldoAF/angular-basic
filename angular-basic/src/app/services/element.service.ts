import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Element } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  list: Element[] = [
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
    return this.list;
  }

  onGetElement(id: Number) {
    return this.list.find(x => x.id === id);
  }

  onAdd(element: Element) {
    this.list.push(element);
  }

  onUpdate(element: Element) {
    let oldElement = this.list.find(x => x.id === element.id);
    oldElement.name = element.name;
    oldElement.email = element.email;
    oldElement.phone = element.phone;
  }

  onDelete(id:Number) {
    //this.list = this.list.filter(x => x.id != id);
    console.log(this.list);
    let element = this.list.find(x => x.id === id);
    let index = this.list.indexOf(element, 0);
    this.list.splice(index,1);
  }
}
