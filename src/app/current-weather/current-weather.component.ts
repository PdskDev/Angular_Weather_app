import { Component, OnInit } from "@angular/core";

import { ICurrentWeather } from "../Model/interfaces";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor() {
    this.current = {
      city: "Brazzaville",
      country: "CG",
      date: new Date(),
      image: "assets/img/sunny.png",
      temperature: 72,
      description: "sunny",
    } as ICurrentWeather;
  }

  ngOnInit() {}
}
