import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEG_tC_FJqdd7QUINbDRp5NPS5CEC21PllCv7E9rsvklq6eDJi92GEGy9ZlGH2aXKaInU&usqp=CAU'),
      new Recipe('A Test Recipe', 'This is a simple test', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEG_tC_FJqdd7QUINbDRp5NPS5CEC21PllCv7E9rsvklq6eDJi92GEGy9ZlGH2aXKaInU&usqp=CAU')
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

}
