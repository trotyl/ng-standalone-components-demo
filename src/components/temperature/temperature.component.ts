import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnInit {
  private _celsius: number
  private _fahrenheit: number
  atCelsuis: boolean = true

  ngOnInit(): void {
    this.celsius = 0
  }

  get celsius(): number {
    return this._celsius
  }

  set celsius(value: number) {
    if (this.atCelsuis) {
      this._celsius = value
      this._fahrenheit = value * 9 / 5 + 32
    }
  }

  get fahrenheit(): number {
    return this._fahrenheit
  }

  set fahrenheit(value: number) {
    if (!this.atCelsuis) {
      this._fahrenheit = value
      this._celsius = (value - 32) / 9 * 5
    }
  }
}
