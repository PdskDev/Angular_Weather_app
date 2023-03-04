import { Component, OnInit } from "@angular/core";

import { ICurrentWeather } from "../model/interfaces";
import { WeatherService } from "../weather/weather.service";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {
    this.current = {
      city: "Brazzaville",
      country: "CG",
      date: 15,
      image: "assets/img/sunny.png",
      temperature: 72,
      description: "sunny",
    } as ICurrentWeather;
  }

  ngOnInit() {
    this.weatherService
      .getCurrentWeather("Brazzaville", "CG")
      .subscribe((data) => (this.current = data));
  }
}
