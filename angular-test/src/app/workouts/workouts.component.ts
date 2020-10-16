import { Component, OnInit } from '@angular/core';
import { WORKOUTS } from '../mock-workouts';
import { Workout } from '../workout';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
})
export class WorkoutsComponent implements OnInit {
  workouts = WORKOUTS;
  selectedWorkout: Workout;
  constructor() {}
  ngOnInit(): void {}
  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }
}
