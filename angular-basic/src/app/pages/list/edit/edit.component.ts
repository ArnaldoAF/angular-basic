import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Element } from 'src/app/models/element.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  header: string;
  element: Element = {
    id:0,
    name:'',
    phone:0,
    email:''
  };

  constructor(private router: Router,private route: ActivatedRoute, private elementService: ElementService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Element' : 'Edit Element';

    if(this.id != 0) {
      this.element = this.elementService.onGetElement(this.id);
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const {
      id,
      name,
      email,
      phone
    } = form.value;
    let element: Element = {
      id,
      name,
      email,
      phone
    }
    if(this.id === 0) {
      this.elementService.onAdd(element)
    }
    else {
      this.elementService.onUpdate(element)
    }
    
    this.router.navigateByUrl('')
  }
}
