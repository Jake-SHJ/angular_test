import { Component, OnInit } from '@angular/core';
import { Workout } from '../workout';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
})
export class WorkoutsComponent implements OnInit {
  workout: Workout = {
    id: 0,
    name: '데드리프트',
    count: 0,
  };
  constructor() {}
  ngOnInit(): void {}
}
