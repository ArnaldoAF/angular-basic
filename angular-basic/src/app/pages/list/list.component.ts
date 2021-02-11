import { Component, OnInit } from '@angular/core';
import { Element } from 'src/app/models/element.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Element[];

  constructor(private elementService: ElementService) { }

  ngOnInit(): void {
    this.list = this.elementService.onGet();
  }

}
