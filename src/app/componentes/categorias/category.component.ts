import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent  {

  @Input() item:Category;
  
  ngOnInit() {}
  
}
