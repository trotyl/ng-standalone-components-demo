import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TemperatureComponent } from './temperature.component'

@NgModule({
  declarations: [TemperatureComponent],
  imports: [FormsModule],
  exports: [TemperatureComponent],
  entryComponents: [TemperatureComponent],
})
export class TemperatureModule { }
