import { Component, OnInit } from '@angular/core';
import { WORKOUTS } from '../mock-workouts';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
})
export class WorkoutsComponent implements OnInit {
  workouts = WORKOUTS;
  constructor() {}
  ngOnInit(): void {}
}
